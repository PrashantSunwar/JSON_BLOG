import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import capitalize from "lodash.capitalize";

function Post({ post }) {
  return (
    <div className="mx-3 my-3 w-72 rounded-lg text-[#393E46] px-3 py-2 flex flex-col justify-center items-center text-center border-t-8 border-[#00ADB5] card">
      <h1 className="text-2xl font-bold tracking-wide">{capitalize(post.title)}</h1>
      <Link
        to={`/post/${post.id}/details`}
        className="mt-8 card_link text-xl text-[#00ADB5]"
      >
        <BsArrowRight />
      </Link>
    </div>
  );
}

export default Post;
