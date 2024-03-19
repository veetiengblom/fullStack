import React from "react";

const PersonForm = ({persons, newName, newNumber, setPersons, setNewName, setNewNumber}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const includes = persons.some((person) => person.name === newName);
    
        if (includes) {
          window.alert(`${newName} is already added to phonebook`);
          return;
        }
        if (newName.trim() === "" || newNumber.trim() === "") {
          return;
        }
        const nameObj = {
          name: newName,
          number: newNumber,
        };
        setPersons(persons.concat(nameObj));
        setNewName("");
        setNewNumber("");
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
