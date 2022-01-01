import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/getPostsById";
import {
  LOAD_POST_DATA_BEGIN,
  LOAD_POST_DATA_SUCCESS,
} from "../context/DataContext/DataReducer";

import DataContext from "../context/DataContext/DataContext";
import Loader from "../components/shared/Loader";
import Post from "../components/Post";
import Pagination from "../components/Pagination";

function PostPage() {
  const { userId } = useParams();
  const { postData, postDataLoading, dispatch } = useContext(DataContext);

  const [skip, setSkip] = useState({
    left: 0,
    right: 5,
  });

  const [active, setActive] = useState(1);

  useEffect(() => {
    dispatch({ type: LOAD_POST_DATA_BEGIN });
    getPostById(userId).then((data) => {
      dispatch({ type: LOAD_POST_DATA_SUCCESS, payload: data });
    });
  }, [dispatch, userId]);

  if (postDataLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto h-screen w-full md:w-11/12 flex flex-wrap justify-center">
        {postData.slice(skip.left, skip.right).map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
      <div className="my-4 inline-block">
        <Pagination active={active} setActive={setActive} setSkip={setSkip} />
      </div>
    </div>
  );
}

export default PostPage;
