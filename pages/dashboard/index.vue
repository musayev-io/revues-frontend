<template>
  <div>
    <ReviewStatistics />
    <div v-if="showingModalCreateBusiness">
      <ModalCreateBusiness />
    </div>
  </div>
</template>

<script>
// import AppNavBar from '@/components/layout/AppNavBar'
import ModalCreateBusiness from '~/components/ModalCreateBusiness'
import ReviewStatistics from '~/components/ReviewStatistics'

// import axios from 'axios'

export default {
  name: 'Dashboard',
  layout: 'AppNavBar',
  components: {
    ReviewStatistics,
    ModalCreateBusiness
  },
  data() {
    return {
      showingModalCreateBusiness: true
    }
  },
  // Generate Access Token for production - https://auth0.com/docs/api/management/v2/get-access-tokens-for-production
  beforeMount() {
    // console.log(`authUser: ${JSON.stringify(this.$auth.user)}`)
    // this.createUser()
  },
  mounted() {},
  methods: {
    // async createUser() {
    //   const payload = {
    //     email: this.$auth.user.email,
    //     first_name: this.$auth.user.given_name,
    //     last_name: this.$auth.user.family_name,
    //     sub: this.$auth.user.sub
    //   }
    //   this.$store.dispatch('user/createUser', payload)
    //   // console.log(`User Store: ${JSON.stringify(this.$store.state.user.user)}`)
  }
}
</script>
