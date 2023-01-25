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

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
  getAllPersons,
  createNewPerson,
  deletePerson
}

export default personService