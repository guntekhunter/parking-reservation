<template>
  <div class="absolute inset-0 overflow-y-hidden bg-black bg-opacity-50 z-10">
    <div class="flex items-start justify-center min-h-screen mt-24">
      <div class="rounded-md py-[2rem] px-[3rem] bg-white shadow-md">
        <div class="flex justify-center">
          <h1 class="text-[4rem] font-bold">A-1</h1>
        </div>
        <table class="mb-[1.5rem] border-t-[.1rem] border-dashed">
          <tbody>
            <tr>
              <td class="py-1 pr-3">Location</td>
              <td>:</td>
              <td>Jl. Jayabaya jaya jaya jaya</td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Payment Methode</td>
              <td>:</td>
              <td>Pay By Cash</td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Date</td>
              <td>:</td>
              <td>20/Agustus/2023</td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Time Start</td>
              <td>:</td>
              <td><input type="text" placeholder="12:20" /></td>
            </tr>
            <tr>
              <td class="py-1 pr-3">Amount</td>
              <td>:</td>
              <td>Rp. 2.000/hour</td>
            </tr>
          </tbody>
        </table>
        <div
          class="justify-betweeen w-full space-x-[2rem] flex justify-between"
        >
          <button
            @click="($event) => $emit('confirm')"
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

// handleButtonClick = () => {
//   this.$emit("close");
//   this.$emit("confirm");
// };
</script>


<style lang="scss" scoped>
</style>