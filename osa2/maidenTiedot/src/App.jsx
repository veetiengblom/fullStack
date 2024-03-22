import { useState } from "react";

import GetCountries from "./components/GetCountries";

function App() {
  const [search, setSearch] = useState("");
  const [countriesFound, setCountriesFound] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div>
        find coutries <input onChange={handleChange} />
      </div>
      <GetCountries
        search={search}
        countriesFound={countriesFound}
        setCountriesFound={setCountriesFound}
      />
    </div>
  );
}

export default App;
