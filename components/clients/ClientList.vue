<template>
  <div class="flex flex-col">
    <div class="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                <span class="relative inline-flex items-center px-2 py-2">
                  <input
                    aria-label="Select all"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                  />
                </span>
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="client in clients" :key="client.email">
              <td class="w-2 px-6 py-4  border-b border-gray-200">
                <span class="relative inline-flex items-center px-2 py-2">
                  <input
                    aria-label="Select all"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                  />
                </span>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      bernardlane@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">Director</div>
                <div class="text-sm leading-5 text-gray-500">
                  Human Resources
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                >
                  Active
                </span>
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
              >
                Owner
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ClientList',
  computed: {
    ...mapGetters({
      clients: 'getClients'
    })
  }
}
</script>
