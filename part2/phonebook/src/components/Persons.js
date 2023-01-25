import PersonDetails from './PersonDetails'

const Persons = (props) => {
  return (
    props.filteredPersons.map(person => {
      return <PersonDetails
        key={person.id}
        name={person.name}
        number={person.number}
        removePerson={() => props.removePerson(person.id)}
      />
    })
  )
}

export default Persons