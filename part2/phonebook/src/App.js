import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAllPersons()
      .then(initialPersons => {
        console.log('initialPersons: ', initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  function addNewPerson(event) {
    event.preventDefault()
    const names = persons.map(person => person.name.toLowerCase())
    const alreadyAdded = names.includes(newName.toLowerCase())

    if (alreadyAdded) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersonObj = {
      name: newName,
      number: newNumber,
      id: newName.length + 1
    }

    personService
      .createNewPerson(newPersonObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm
        addNewPerson={addNewPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App