import React from "react";

const MultipleCounty = ({
  countriesFound,
  setShowMultiple,
  setCountriesFound,
}) => {
  const handleClick = (countryName) => {
    setShowMultiple(false);
    const filteredCountry = countriesFound.filter(
      (country) => country.name.common === countryName
    );
    setCountriesFound(filteredCountry);
  };
  return (
    <div>
      <ul>
        {countriesFound.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => handleClick(country.name.common)}>
              show
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleCounty;
