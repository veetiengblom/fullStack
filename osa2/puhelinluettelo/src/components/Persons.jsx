import React from "react";

const Persons = ({ persons, filter }) => {
  const personsToShow =
    filter.length > 0
      ? persons.filter((person) =>
          person.name.toLocaleLowerCase().includes(filter)
        )
      : persons;
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
