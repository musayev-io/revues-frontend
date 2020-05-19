import UserService from '~/services/UserService'

export default {
  createUser({ commit }, payload) {
    UserService.createUser(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_USER', response.data)
      // console.log(`User Store: ${this.$store.state.user.user}`)
      // push router to dashboard
    })
  },
  getUser({ commit }, payload) {
    UserService.createUser(payload).then((response) => {
      console.log(response.data)
      commit('LOAD_USER', response.data)
      // push router to dashboard
    })
  },
  updateUser({ commit }, payload) {
    UserService.createUser(payload).then((response) => {
      // console.log(response.data)
      commit('LOAD_USER', response.data)
      // console.log(`User Store: ${this.$store.state.user.user}`)
      // push router to dashboard
    })
  }
}
