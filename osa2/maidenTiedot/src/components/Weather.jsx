import { useEffect } from "react";
import weatherServices from "../services/weatherServices";

const Weather = ({ capital, weatherData, setWeatherData }) => {
  useEffect(() => {
    weatherServices
      .weather(capital)
      .then((response) => {
        const i = response.weather[0];
        setWeatherData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return;
      });
  }, [capital]);

  const imgSrc = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {weatherData ? (
        <div>
          <p>tempature {weatherData.main.temp} Celsius</p>
          <img src={imgSrc} />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Wheater data not found</p>
      )}
    </div>
  );
};

export default Weather;
