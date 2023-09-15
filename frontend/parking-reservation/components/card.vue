<template>
  <div
    :class="{ 'bg-blue-200': show, 'bg-green-200': !show }"
    class="rounded-md shadow-md p-5"
  >
    <div>{{ name }}</div>
    <div>{{ location }}</div>
    <div>{{ capacity }}</div>
    <div>{{ isAvailable }}</div>
    <slot />
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
console.log(show);
</script>