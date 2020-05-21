// deleteBrand
// associateClient -- should be triggered when client is created

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
  getBrand(id) {
    return apiClient.get('/brands/' + id)
  },
  createBrand(payload) {
    return apiClient.post('/brands/', payload)
  },
  updateBrand(id, payload) {
    return apiClient.put('/brands/' + id, payload)
  }
}
