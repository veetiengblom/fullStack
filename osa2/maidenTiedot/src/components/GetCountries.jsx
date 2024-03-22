import React from "react";
import countrieService from "../services/countries";
import DisplayCountries from "./DisplayCountries";
import { useEffect, useState } from "react";

const GetCountries = ({ search, countriesFound, setCountriesFound }) => {
  const [showData, setShowData] = useState(false);
  const [showMultiple, setShowMultiple] = useState(true);
  useEffect(() => {
    if (search.trim() !== "") {
      countrieService
        .getAll(search)
        .then((response) => {
          if (response.length === 1) {
            setShowMultiple(false);
            setShowData(true);
            setCountriesFound(response);
          } else if (response.length <= 10) {
            setShowMultiple(true);
            setShowData(true);
            setCountriesFound(response);
            return;
          } else {
            setShowData(false);
            setCountriesFound([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [search]);
  return (
    <div>
      {showData ? (
        <DisplayCountries
          countriesFound={countriesFound}
          showMultiple={showMultiple}
          setShowMultiple={setShowMultiple}
          setCountriesFound={setCountriesFound}
        />
      ) : (
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      )}
    </div>
  );
};

export default GetCountries;
