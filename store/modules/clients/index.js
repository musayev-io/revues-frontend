import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  clients: [
    { name: 'Musa Musayev', email: 'musa@musayev.io' },
    { name: 'Musa Clark', email: 'clark@musayev.io' },
    { name: 'Musa Kent', email: 'kent@musayev.io' }
  ]
}

export default {
  state,
  actions,
  getters,
  mutations
}
