import BrandsService from '~/services/BrandsService'

export default {
  createBrand({ commit }, payload) {
    BrandsService.createBrand(payload).then((response) => {
      commit('LOAD_BRAND', response.data)
      // console.log(JSON.stringify(response.data))
      this.$router.push({ name: 'brands' })
      // console.log(`Brand Store: ${this.$store.state.Brand.Brand}`)
      // push router to dashboard
    })
  },
  getBrand({ commit }, payload) {
    BrandsService.createBrand(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_BRAND', response.data)
      // push router to dashboard
    })
  },
  updateBrand({ commit }, payload) {
    BrandsService.createBrand(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_BRAND', response.data)
      // console.log(`Brand Store: ${this.$store.state.Brand.user}`)
      // push router to dashboard
    })
  }
}
//
