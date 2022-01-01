import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const response = await axios.get(BASE_URL);
  const data = response.data;
  return data;
};
