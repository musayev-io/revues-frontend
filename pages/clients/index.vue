<template>
  <ClientList />
</template>

<script>
import ClientList from '~/components/clients/ClientList'

// const axios = require('axios');

export default {
  name: 'Clients',
  layout: 'AppNavBar',
  components: {
    ClientList
  },
  data() {
    return {}
  },
  mounted() {
    // this.first_name = this.$auth.user.given_name
    // this.last_name = this.$auth.user.family_name
    // this.email = this.$auth.user.email
    // this.loadUserInfo()
  },
  methods: {
    // loadUserInfo() {
    //   this.$store.dispatch('loadUserInfo')
    //   // console.log(this.$store.userInfo);
    // }
  }
}
</script>
