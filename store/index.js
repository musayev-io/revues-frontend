import Vuex from 'vuex'
import UserModule from './modules/user'
import ClientsModule from './modules/clients'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user: UserModule,
      clients: ClientsModule
    }
  })
}

export default createStore
