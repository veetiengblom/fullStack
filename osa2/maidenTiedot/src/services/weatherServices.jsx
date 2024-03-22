import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const weather = (capital) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
  );
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
};

export default { weather };
