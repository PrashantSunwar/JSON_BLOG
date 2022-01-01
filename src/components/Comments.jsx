import capitalize from "lodash.capitalize";
import Loader from "./shared/Loader";

import { useState } from "react";
import { FaComments } from "react-icons/fa";
import { getComments } from "../api/getComments";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commentLoaded, setCommentLoaded] = useState(false);
  const [hide, setHide] = useState(false);

  const loadComments = (id) => {
    if (!commentLoaded) {
      setLoading(true);
      getComments(id).then((data) => {
        setComments(data);
        setLoading(false);
        setCommentLoaded(true);
      });
    }
  };

  return (
    <div className="self-start">
      <button
        className="flex items-center"
        onClick={() => {
          loadComments(postId);
        }}
      >
        <FaComments className="inline-block text-2xl mr-2" />
        <strong>Comments</strong>
        {commentLoaded && (
          <span className="ml-4">
            {hide ? (
              <AiFillCaretDown onClick={() => setHide((hide) => !hide)} />
            ) : (
              <AiFillCaretUp onClick={() => setHide((hide) => !hide)} />
            )}
          </span>
        )}
      </button>
      {loading ? (
        <Loader />
      ) : (
        commentLoaded && (
          <div
            className="mt-2 h-64 overflow-y-scroll"
            style={{ display: hide ? "none" : "block" }}
          >
            <ul className="mr-4">
              {comments.map((comment) => (
                <li key={comment.id} className="my-4 border-2 p-4 rounded-lg">
                  <h3 className="text-xl font-bold">{capitalize(comment.name)}</h3>
                  <p className="text-sm">{comment.email}</p>
                  <p className="text-lg ">{capitalize(comment.body)}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default Comments;
