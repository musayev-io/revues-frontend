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
            <div class="col-span-6 sm:col-span-6">
              <label
                for="business_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Business Name</label
              >
              <input
                id="business_name"
                v-model="businessName"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="company_website"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Website
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                >
                  https://
                </span>
                <input
                  id="company_website"
                  v-model="businessWebsite"
                  class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="www.example.com"
                />
              </div>
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="phone_number"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Phone Number</label
              >
              <input
                id="phone_number"
                v-model="businessPhoneNumber"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-6">
              <label
                for="street_address"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Street address</label
              >
              <input
                id="street_address"
                v-model="businessStreetAddress"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                for="city"
                class="block text-sm font-medium leading-5 text-gray-700"
                >City</label
              >
              <input
                id="city"
                v-model="businessCity"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                for="state"
                class="block text-sm font-medium leading-5 text-gray-700"
                >State / Province</label
              >
              <input
                id="state"
                v-model="businessState"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                for="postal_code"
                class="block text-sm font-medium leading-5 text-gray-700"
                >ZIP / Postal</label
              >
              <input
                id="postal_code"
                v-model="businessPostalCode"
                class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="mt-2 sm:mt-2 mx-6 mb-4">
        <span class="flex w-full rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent mt-4 px-5 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click.prevent="createBrand"
          >
            Let's Go!
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import slugify from 'slugify'
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default {
  name: 'CreateBusinessModal',
  data() {
    return {
      businessName: null,
      businessWebsite: null,
      businessPhoneNumber: null,
      businessStreetAddress: null,
      businessCity: null,
      businessState: null,
      businessPostalCode: null,
      businessSubscription: 'FREE',
      userFirstName: null,
      userLastName: null,
      userEmail: null
    }
  },
  mounted() {},
  methods: {
    createBrand() {
      const payload = {
        brand_name: toTitleCase(this.businessName),
        website: `https://${this.businessWebsite}`,
        phone_number: this.businessPhoneNumber,
        street_address: this.businessStreetAddress,
        city: toTitleCase(this.businessCity),
        state: this.businessState.toUpperCase(),
        postal_code: this.businessPostalCode,
        subscription: this.businessSubscription.toUpperCase()
      }
      this.$store.dispatch('brands/createBrand', payload)
    }
  }
}
</script>
