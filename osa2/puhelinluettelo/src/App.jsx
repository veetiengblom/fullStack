import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personSercives from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateMessage, setUpdateMessage] = useState(null);

  const fectPersons = () => {
    console.log("fetched");
    personSercives.getAll().then((personData) => {
      setPersons(personData);
    });
  };

  useEffect(fectPersons, []);

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage} updateMessage={updateMessage} />
      <Filter setFilter={setFilter} />

      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setUpdateMessage={setUpdateMessage}
        setErrorMessage={setErrorMessage}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
        setUpdateMessage={setUpdateMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
