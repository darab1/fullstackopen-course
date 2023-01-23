import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function addNewPerson(event) {
    event.preventDefault()
    const names = persons.map(person => person.name)
    const alreadyAdded = names.includes(newName)

    if (alreadyAdded) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersonObj = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPersonObj))
    setNewName('')
    setNewNumber('')
  }

  function handleNameChange(event) {
    setNewName(event.target.value)
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <div>
            number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return <li
            key={person.name}>
            {person.name} {person.number}
          </li>
        })}
      </ul>
    </div>
  )
}

export default App