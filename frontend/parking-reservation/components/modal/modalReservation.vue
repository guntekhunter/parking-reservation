<template>
  <div class="absolute inset-0 overflow-y-hidden bg-black bg-opacity-50 z-10">
    <div class="flex items-start justify-center min-h-screen mt-24">
      <div class="rounded-md py-[2rem] px-[3rem] bg-white shadow-md">
        <div class="flex justify-center">
          <h1 class="text-[4rem] font-bold">{{ spotName.toUpperCase() }}</h1>
        </div>
        <table class="mb-[1.5rem] border-t-[.1rem] border-dashed">
          <tbody>
            <tr>
              <td class="py-1 pr-3">Location</td>
              <td>:</td>
              <td>{{ location }}</td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Payment Methode</td>
              <td>:</td>
              <td>Pay By Cash</td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Time Start</td>
              <td>:</td>
              <td><input type="text" placeholder="12:20" /></td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Amount</td>
              <td>:</td>
              <td>Rp. {{ amount }}/hour</td>
            </tr>
          </tbody>
        </table>
        <div
          class="justify-betweeen w-full space-x-[2rem] flex justify-between"
        >
          <button
            @click="createReservation"
            class="bg-yellow-200 px-[1.5rem] py-[.5rem] rounded-md"
          >
            Confirm
          </button>
          <button
            @click="($event) => $emit('close')"
            class="bg-yellow-200 px-[1.5rem] py-[.5rem] rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { placeId, spotId, spotName, location, amount } = defineProps([
  "placeId",
  "spotId",
  "spotName",
  "location",
  "amount",
]);
const data = ref({
  user_id: 1,
  parking_spot_id: spotId,
  parking_place_id: placeId,
  payment_status: false,
});

const createReservation = async () => {
  const { data: responseData } = await useFetch(
    "http://localhost:3001/reservation",
    {
      method: "post",
      body: {
        user_id: data.value.user_id,
        parking_place_id: data.value.parking_place_id,
        parking_spot_id: data.value.parking_spot_id,
        payment_status: data.value.payment_status,
      },
    }
  );

  console.log(responseData.value);
};
</script>


<style lang="scss" scoped>
</style>