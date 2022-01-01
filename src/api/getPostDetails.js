import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

export const getPostDetails = async (postId) => {
  const response = await axios.get(`${BASE_URL}${postId}`);
  const data = response.data;
  return data;
};
