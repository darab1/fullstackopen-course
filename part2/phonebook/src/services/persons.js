import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const createNewPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(res => res.data)
}

const personService = {
  getAllPersons,
  createNewPerson
}
export default personService