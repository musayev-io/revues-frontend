<template>
  <div>
    <div>
      <span class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          @click="createClientModalShowing = true"
        >
          Create Client
        </button>
      </span>
    </div>
    <ClientList />
    <vif create-client-modal />
    <CreateClientModal
      v-if="createClientModalShowing"
      @close-modal="closeCreateClientModal"
    />
  </div>
</template>

<script>
import ClientList from '~/components/clients/ClientList'
import CreateClientModal from '~/components/clients/CreateClientModal'

// const axios = require('axios')

export default {
  name: 'Clients',
  layout: 'AppNavBar',
  components: {
    ClientList,
    CreateClientModal
  },
  data() {
    return {
      createClientModalShowing: false
    }
  },
  mounted() {},
  methods: {
    closeCreateClientModal() {
      this.createClientModalShowing = false
    }
  }
}
</script>
