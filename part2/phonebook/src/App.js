import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input
        value={filter}
        onChange={handleFilterChange}
      />
      <h2>add a new</h2>
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
        {filteredPersons.map(person => {
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