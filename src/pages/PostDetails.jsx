import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";

import { AiTwotoneDelete } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";

import { getPostDetails } from "../api/getPostDetails";
import { postDelete } from "../api/postDelete";

import capitalize from "lodash.capitalize";
import Loader from "../components/shared/Loader";
import Comments from "../components/Comments";
import DataContext from "../context/DataContext/DataContext";
import {
  POST_DATA_DELETE_BEGIN,
  POST_DATA_DELETE_SUCCESS,
} from "../context/DataContext/DataReducer";

function PostDetails() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { postDeleteLoading, dispatch } = useContext(DataContext);
  const [postDetail, setPostDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostDetails(postId).then((data) => {
      setPostDetail({
        title: data.title,
        body: data.body,
        id: data.id,
      });
      setLoading(false);
    });
  }, [postId]);

  const handleDelete = (id) => {
    dispatch({ type: POST_DATA_DELETE_BEGIN });
    postDelete(id).then((_) => {
      dispatch({ type: POST_DATA_DELETE_SUCCESS });
      navigate(-1);
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="text-[#121212] container mx-auto w-full md:w-7/12 px-20 py-10 flex flex-col h-screen items-center">
      <div className=" shadow-md px-12 py-8 border-t-8 border-[#00ADB5] rounded-xl relative card">
        <div className="mb-4">
          <h1 className="text-4xl mb-8 font-bold hover:underline text-[#222831]">
            {capitalize(postDetail.title)}
          </h1>
          <p className="text-2xl text-[#393E46]">{capitalize(postDetail.body)}</p>
          <button
            className="absolute right-4 top-4"
            onClick={() => handleDelete(postDetail.id)}
          >
            {postDeleteLoading ? (
              <CgSpinner className="lds-ring small text-2xl" />
            ) : (
              <AiTwotoneDelete className="text-2xl" />
            )}
          </button>
        </div>
        <Comments postId={postDetail.id} />
      </div>
    </div>
  );
}

export default PostDetails;
