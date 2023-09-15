<template>
  <div
    :class="{ 'hover:bg-gray-200': show, 'bg-gray-100 opacity-70': !show }"
    class="p-5 duration-200 border-dashed border-t-2"
  >
    <div class="bg-gray-400 p-y-[4rem] h-[10rem] items-center flex">
      <div class="w-full flex justify-center text-[1.5rem] font-bold">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { name, location, capacity, isAvailable } = defineProps([
  "name",
  "location",
  "capacity",
  "isAvailable",
]);

let show = false;

if (isAvailable === "available") {
  show = true;
}
</script>