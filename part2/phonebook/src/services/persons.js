import axios from 'axios'

const baseUrl = '/api/persons'

const getAllPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const createNewPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(res => res.data)
}

const updatePerson = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  return request.then(res => res.data)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
  getAllPersons,
  createNewPerson,
  updatePerson,
  deletePerson
}

export default personService