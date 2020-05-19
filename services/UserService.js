import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.AWS_BASE_URL,
  withCredentials: false,
  headers: {
    'x-api-key': process.env.AWS_API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default {
  getUser(id) {
    return apiClient.get('/users/' + id)
  },
  createUser(payload) {
    return apiClient.post('/users/', payload)
  },
  updateUser(id, payload) {
    return apiClient.put('/users/' + id, payload)
  }

  // deteleUser
  // updateUser
  // associateToBusiness

  // getEvents(perPage, page) {
  //   return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  // },
  // postEvent(event) {
  //   return apiClient.post('/events', event)
  // }
}
