import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/name/";

const getAll = (search) => {
  const request = axios.get(`${baseUrl}${search}`);
  return request.then((response) => response.data);
};

export default { getAll };
