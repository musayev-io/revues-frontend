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
  getClient(id) {
    return apiClient.get('/users/' + id)
  },
  createClient(payload) {
    return apiClient.post('/users/', payload)
  },
  updateClient(id, payload) {
    return apiClient.put('/users/' + id, payload)
  }
}

// createClient
// updateClient
// getClients
// deleteClient
