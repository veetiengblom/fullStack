import React, { useState } from "react";
import Weather from "./Weather";

const OneCountry = ({ countriesFound }) => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [icon, setIcon] = useState("");
  return (
    <div>
      <div>
        <h1>{countriesFound[0].name.common}</h1>
        <p>capital {countriesFound[0].capital}</p>
        <p>area {countriesFound[0].area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(countriesFound[0].languages).map(([key, value]) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
        <p
          style={{ fontSize: "7em", padding: "0", margin: "0" }}
          className="flag"
        >
          {countriesFound[0].flag}
        </p>
      </div>
      <div>
        <Weather
          capital={countriesFound[0].capital}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          icon={icon}
          setIcon={setIcon}
        />
      </div>
    </div>
  );
};

export default OneCountry;
