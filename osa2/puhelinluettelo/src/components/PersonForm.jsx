import React from "react";

import personSercives from "../services/persons";

const PersonForm = ({
  persons,
  newName,
  newNumber,
  setPersons,
  setNewName,
  setNewNumber,
  setUpdateMessage,
  setErrorMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const includes = persons.find((person) => person.name === newName);

    if (includes) {
      const changedPerson = { ...includes, number: newNumber };
      personSercives
        .updateNumber(includes.id, changedPerson)
        .then((updatedPerson) => {
          setUpdateMessage(
            `Updated ${updatedPerson.name}'s number to: ${updatedPerson.number}`
          );
          setPersons(
            persons.map((person) =>
              person.id !== updatedPerson.id ? person : updatedPerson
            )
          );
          setNewName("");
          setNewNumber("");
          setTimeout(() => {
            setUpdateMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${newName} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
      return;
    }
    if (newName.trim() === "" || newNumber.trim() === "") {
      return;
    }
    const nameObj = {
      name: newName,
      number: newNumber,
    };

    personSercives
      .create(nameObj)
      .then((newPerson) => {
        setUpdateMessage(`Added: ${newName}`);
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
        setTimeout(() => {
          setUpdateMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(
          `Information of ${newName.name} has already been removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
