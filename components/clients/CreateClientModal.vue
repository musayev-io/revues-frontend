<template>
  <div
    class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <!--
    Background overlay, show/hide based on modal state.
  
    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div
      class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full sm:p-6"
    >
      <form>
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-3 sm:col-span-3">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >First Name</label
              >
              <input
                id="first_name"
                v-model="firstName"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-3 sm:col-span-3">
              <label
                for="last_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Last Name</label
              >
              <input
                id="last_name"
                v-model="lastName"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-3">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Email</label
              >
              <input
                id="email"
                v-model="email"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-3 sm:col-span-3 lg:col-span-3">
              <label
                for="cell_phone"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Cell Phone</label
              >
              <input
                id="cell_phone"
                v-model="cellPhone"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="mt-2 sm:mt-2 mx-6 mb-4">
        <span class="flex w-full">
          <button
            type="button"
            class="items-center w-1/3 mt-4 mr-4 px-5 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            @click="$emit('close-modal')"
          >
            Cancel
          </button>
          <button
            type="button"
            class=" justify-center w-2/3 rounded-md border border-transparent mt-4 px-5 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click.prevent="createBrand"
          >
            Create Client
          </button>
        </span>
        <!-- <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
          >
            Button text
          </button>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      cellPhone: null,
      email: null
    }
  },
  methods: {}
}
</script>
