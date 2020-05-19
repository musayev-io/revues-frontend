import Vuex from 'vuex'
import UserModule from './modules/user'
import ClientsModule from './modules/clients'
import BrandsModule from './modules/brands'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user: UserModule,
      clients: ClientsModule,
      brands: BrandsModule
    }
  })
}

export default createStore
