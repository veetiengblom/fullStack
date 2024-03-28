import React from "react";
import personSercives from "../services/persons";

const Persons = ({
  persons,
  filter,
  setPersons,
  setUpdateMessage,
  fectPersons,
}) => {
  const personsToShow =
    filter.length > 0
      ? persons.filter((person) =>
          person.name.toLocaleLowerCase().includes(filter)
        )
      : persons;

  const handleClick = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    personSercives
      .remove(id)
      .then((personRemoved) => {
        setUpdateMessage(`Deleted ${personToDelete.name}`);
        //setPersons(persons.filter((person) => person.id !== personRemoved.id));
        fectPersons();
        setTimeout(() => {
          setUpdateMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(
          `Information of ${personToDelete.name} has already been removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
