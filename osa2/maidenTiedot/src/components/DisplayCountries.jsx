import OneCountry from "./OneCountry";
import MultipleCounty from "./MultipleCounty";

const DisplayCountries = ({
  countriesFound,
  showMultiple,
  setShowMultiple,
  setCountriesFound,
}) => {
  return (
    <div>
      {showMultiple ? (
        <MultipleCounty
          countriesFound={countriesFound}
          setShowMultiple={setShowMultiple}
          setCountriesFound={setCountriesFound}
        />
      ) : (
        <OneCountry countriesFound={countriesFound} />
      )}
    </div>
  );
};

export default DisplayCountries;
