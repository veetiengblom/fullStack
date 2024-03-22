import axios from "axios";
const baseUrl = "https://restcountries.com/v3/name/";

const getAll = (search) => {
  const request = axios.get(`${baseUrl}${search}`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
};

export default { getAll };
