<template>
  <AppNavBar>
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Create your first client!
        </h3>
        <div class="mt-2 sm:flex sm:items-start sm:justify-between">
          <div class="max-w-xl text-sm leading-5 text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptatibus corrupti atque repudiandae nam.
            </p>
          </div>
          <div
            class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center"
          >
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Create Client
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- FORM -->
  </AppNavBar>
</template>

<script>
export default {
  name: 'Reviews',
  layout: 'AppNavBar',
  components: {},
  data() {
    return {}
  },
  mounted() {
    // this.first_name = this.$auth.user.given_name
    // this.last_name = this.$auth.user.family_name
    // this.email = this.$auth.user.email
  },
  methods: {}
}
</script>
