import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts?userId=";

export const getPostById = async (id) => {
  const url = `${BASE_URL}${id}`;
  const response = await axios.get(url);
  const data = response.data;
  return data;
};
