import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/comments?postId=";

export const getComments = async (id) => {
  const url = `${BASE_URL}${id}`;
  const response = await axios.get(url);
  const data = response.data;
  return data;
};
