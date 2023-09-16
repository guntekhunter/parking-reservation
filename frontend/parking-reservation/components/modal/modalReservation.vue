<template>
  <div class="absolute inset-0 overflow-y-hidden bg-black bg-opacity-50 z-10">
    <modal-confirm v-if="confirmed" />
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
              <td>
                <input type="text" placeholder="12:20" v-model="inputValue" />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Amount</td>
              <td>:</td>
              <td>Rp. {{ amount }}/hour</td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="!show"
          class="justify-betweeen w-full space-x-[2rem] flex justify-between"
        >
          <button
            @click="handleConfirm"
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
        <div v-else>
          <button
            @click="($event) => $emit('close')"
            class="bg-yellow-200 px-[1.5rem] py-[.5rem] rounded-md w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { emit } = defineEmits(["confirm"]);
const show = ref(false);
const confirmed = ref(false);
const inputValue = ref("");
const id = ref(parseInt(localStorage.getItem("user")));

const getValue = () => {
  console.log("Input Value:", inputValue.value);
};

const { placeId, spotId, spotName, location, amount } = defineProps([
  "placeId",
  "spotId",
  "spotName",
  "location",
  "amount",
]);
const data = ref({
  user_id: id,
  parking_spot_id: spotId,
  parking_place_id: placeId,
  payment_status: false,
});

const handleConfirm = () => {
  createReservation();
  show.value = true;
  confirmed.value = true;
  setTimeout(() => {
    confirmed.value = false;
  }, 1000);
};

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
        time: inputValue.value,
      },
    }
  );
  console.log(responseData);
};
</script>


<style lang="scss" scoped>
</style>