import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function addNewPerson(event) {
    event.preventDefault()
    const newPersonObj = {
      name: newName
    }

    setPersons(persons.concat(newPersonObj))
    setNewName('');
  }

  function handlePersonChange(event) {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App