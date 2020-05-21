<template>
  <div>
    <div class="flex">
      <!-- Create Client -->
      <span class="flex justify-end rounded-md shadow-sm">
        <button
          type="button"
          class="flex justify-end items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          @click="toggleCreateClientForm"
        >
          Create Client
        </button>
      </span>
    </div>
    <ClientList />
    <CreateClientModal
      v-if="showCreateClientForm"
      @cancel-form="toggleCreateClientForm"
    />
  </div>
</template>

<script>
import ClientList from '~/components/clients/ClientList'
import CreateClientModal from '~/components/clients/CreateClientModal'

// const axios = require('axios');

export default {
  name: 'Clients',
  layout: 'AppNavBar',
  components: {
    ClientList,
    CreateClientModal
  },
  data() {
    return {
      showBottomBar: true,
      showCreateClientForm: false
    }
  },
  mounted() {
    // this.first_name = this.$auth.user.given_name
    // this.last_name = this.$auth.user.family_name
    // this.email = this.$auth.user.email
    // this.loadUserInfo()
  },
  methods: {
    toggleBottomBar() {
      this.showBottomBar = !this.showBottomBar
    },
    toggleCreateClientForm() {
      this.showCreateClientForm = !this.showCreateClientForm
    }
  }
}
</script>
