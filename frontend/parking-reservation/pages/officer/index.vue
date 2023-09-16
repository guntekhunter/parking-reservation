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
            <tr v-for="(r, index) in reservation" :key="r.id">
              <td class="px-6 py-4 whitespace-no-wrap">{{ index + 1 }}</td>
              <td class="px-6 py-4 whitespace-no-wrap">
                {{ r.parking_spots.name.toUpperCase() }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                {{ r.parking_places.location }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                {{ r.user.email }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div
                  :class="{
                    'bg-green-200 border-green-300 text-green-400 text-green-400':
                      r.payment_status,
                    'bg-red-200 border-red-300 text-red-400 text-red-400':
                      !r.payment_status,
                  }"
                  class="p-[.2rem] border-[1.3px] rounded-md w-auto flex justify-center"
                >
                  {{ r.payment_status ? "Paid" : "Unpaid" }}
                </div>
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap flex justify-center py-[1rem]"
              >
                <button
                  v-if="!r.payment_status"
                  @click="confirm(r.id)"
                  class="p-[.5rem] bg-green-200 rounded-md hover:bg-green-300 shadow-md"
                >
                  Confirm
                </button>
                <button
                  v-if="r.payment_status"
                  @click="deleteReservation(r.id, r.parking_spot_id)"
                  class="p-[.5rem] bg-red-200 rounded-md hover:bg-red-300 shadow-md"
                >
                  delete
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
definePageMeta({
  layout: "officer",
});

const { data: reservation } = useFetch("http://localhost:3001/reservation");
console.log(reservation.value);
const confirm = (id) => {
  const { data: reservation } = useFetch(
    "http://localhost:3001/reservation/confirm/" + id,
    {
      method: "post",
    }
  );
};
const deleteReservation = (id, parking_spot_id) => {
  const { data: reservation } = useFetch(
    `http://localhost:3001/reservation/${id}`,
    {
      method: "delete",
      body: {
        parking_spot_id: parking_spot_id,
      },
    }
  );
};
</script>

<style lang="scss" scoped>
</style>