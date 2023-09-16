<template>
  <div class="flex w-full justify-center">
    <div class="w-[80%] py-5">
      <div class="rounded-md border border-1">
        <table class="min-w-full divide-y divide-gray-200 overflow-hidden">
          <thead>
            <tr>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                No
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Spot Name
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Parking Name
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Paid Status
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider justify-center flex"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr key="{key}">
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">A-1</td>
              <td class="px-6 py-4 whitespace-no-wrap">Pekalongan</td>
              <td class="px-6 py-4 whitespace-no-wrap">
                agunghaeruddin@gmail.com
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div
                  class="p-[.2rem] bg-red-200 border-red-300 border-[1.3px] rounded-md w-auto flex justify-center text-red-400"
                >
                  unpaid
                </div>
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap flex justify-center py-[1rem]"
              >
                <button
                  class="p-[.5rem] bg-green-200 rounded-md hover:bg-green-300 shadow-md"
                >
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>