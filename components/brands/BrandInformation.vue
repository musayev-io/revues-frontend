<template>
  <!-- FORM -->
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Brand Information
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-600">
            Provide basic details about your brand
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <BrandInformationForm />
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BrandInformationForm from '~/components/forms/BrandInformationForm'

export default {
  name: 'BrandInformation',
  components: {
    BrandInformationForm
  },
  computed: {
    ...mapGetters('brands', {
      brand: 'getBrand'
    })
  }
}
</script>
