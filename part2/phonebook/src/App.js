import { useState, useEffect } from 'react'
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
        setPersons(initialPersons)
      })
  }, [])

  function addNewPerson(event) {
    event.preventDefault()
    const names = persons.map(person => person.name.toLowerCase())
    const alreadyAdded = names.includes(newName.toLowerCase())

    if (alreadyAdded) {
      if (window.confirm(`${newName} is already added to    phonebook, replace the old number with the new one?`)) {
        const personToUpdate = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        updatePerson(personToUpdate.id)
      }
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

  function updatePerson(id) {
    const personToUpdate = persons.find(p => p.id === id)
    const updatedPerson = {
      ...personToUpdate,
      number: newNumber
    }

    personService
      .updatePerson(id, updatedPerson)
      .then(returnedPerson => {
        setPersons(prevPersons => {
          return prevPersons.map(p => {
            return p.id === id
              ? { ...p, number: returnedPerson.number }
              : p
          })
        })
      })
  }

  function removePerson(id) {
    const personToRemove = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${personToRemove.name} ?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <Persons
        filteredPersons={filteredPersons}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App