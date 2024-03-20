import { useState } from "react";
import countrieService from "./services/countries";
import { useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [countriesFound, setCountriesFound] = useState([]);

  useEffect(() => {
    if (search.trim() !== "") {
      countrieService
        .getAll(search)
        .then((response) => {
          if (response.length <= 10) {
            setCountriesFound(response);
            return;
          }
          setCountriesFound([]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div>
        find coutries <input onChange={handleChange} />
      </div>
      <ul>
        {countriesFound.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
