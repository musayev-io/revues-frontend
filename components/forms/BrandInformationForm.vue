<template>
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
          :value="brand_name"
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
            :value="website"
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
          :value="phone_number"
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
          :value="street_address"
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
          :value="city"
          class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>

      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
        <label
          for="state"
          class="block text-sm font-medium leading-5 text-gray-700"
          >State / Province</label
        >
        <input
          id="state"
          :value="state"
          class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>

      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
        <label
          for="postal_code"
          class="block text-sm font-medium leading-5 text-gray-700"
          >ZIP / Postal</label
        >
        <input
          id="postal_code"
          :value="postal_code"
          class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapFields } from 'vuex-map-fields'

export default {
  name: 'BrandInformationForm',
  data() {
    // return {
    //   brand_name: '',
    //   website: '',
    //   phone_number: '',
    //   street_address: '',
    //   city: '',
    //   state: '',
    //   postal_code: ''
    // }
  },
  computed: {
    ...mapGetters({
      brand: 'getBrand'
    })
    // ...mapFields('brands', ['brand.brand_name'])
  }
  // mounted() {
  //   this.brand_name = this.brand.brand_name
  //   this.website = this.brand.website
  //   this.phone_number = this.brand.phone_number
  //   this.street_address = this.brand.address.street_address
  //   this.address.city = this.brand.address.city
  //   this.address.state = this.brand.address.state
  //   this.address.postal_code = this.brand.address.postal_code
  // }
}
</script>

<style lang="scss" scoped></style>
