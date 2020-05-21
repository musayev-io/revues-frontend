import ClientService from '~/services/ClientService'

export const state = () => ({
  client: {},
  clients: [
    { name: 'Musa Musayev', email: 'musa@musayev.io' },
    { name: 'Musa Clark', email: 'clark@musayev.io' },
    { name: 'Musa Kent', email: 'kent@musayev.io' }
  ]
})

export const getters = {
  getClients: (state) => state.clients,
  totalClients: (state) => state.clients.length
}

export const mutations = {
  LOAD_CLIENT(state, payload) {
    state.client = payload
  },
  LOAD_CLIENTS(state, payload) {
    state.clients = payload
  },
  APPEND_CLIENTS(state, payload) {
    state.clients.push(payload)
  }
}

export const actions = {
  createClient({ commit }, payload) {
    ClientService.createClient(payload).then((response) => {
      commit('LOAD_BRAND', response.data)
      console.log(JSON.stringify(response.data))
      this.$router.push({ name: 'brands' })
      // push router to dashboard
    })
  }
}
