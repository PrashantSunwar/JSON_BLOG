import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

export const postDelete = async (id) => {
  const url = `${BASE_URL}${id}`;
  const response = await axios.delete(url);
  const data = response.data;
  return { ...data, id };
};
