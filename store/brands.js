import BrandService from '~/services/BrandService'

export const state = () => ({
  brand: {}
  // brands: {}
})

export const getters = {
  getBrand: (state) => state.brand
}

export const mutations = {
  LOAD_BRAND: (state, payload) => (state.brand = payload)
}

export const actions = {
  createBrand({ commit }, payload) {
    BrandService.createBrand(payload).then((response) => {
      commit('LOAD_BRAND', response.data)
      // console.log(JSON.stringify(response.data))
      this.$router.push({ name: 'brands' })
      // console.log(`Brand Store: ${this.$store.state.Brand.Brand}`)
      // push router to dashboard
    })
  },
  getBrand({ commit }, payload) {
    BrandService.createBrand(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_BRAND', response.data)
      // push router to dashboard
    })
  },
  updateBrand({ commit }, payload) {
    BrandService.createBrand(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_BRAND', response.data)
      // console.log(`Brand Store: ${this.$store.state.Brand.user}`)
      // push router to dashboard
    })
  }
}
