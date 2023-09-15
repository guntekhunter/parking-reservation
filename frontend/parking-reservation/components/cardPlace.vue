<template>
  <NuxtLink :to="'parking-places/' + id" class="p-5 shadow-md rounded-md">
    <div class="flex space-x-[1rem] items-center">
      <div class="w-[40%] bg-gray-200">
        <img src="~/assets/image/1.jpg" alt="" />
      </div>
      <div class="space-y-2">
        <div class="font-bold text-[1rem]">{{ name }}</div>
        <div class="text-[.8rem] text-gray-400">{{ location }}</div>
        <div class="text-[.8rem] text-gray-400">{{ capacity }} Vehicles</div>
        <div class="text-[.8rem]">{{ amount }}/hour</div>
      </div>
    </div>
  </NuxtLink>
</template>
  
<script setup>
import { ref, defineProps } from "vue";

const { name, image, location, amount, capacity, id } = defineProps([
  "name",
  "image",
  "location",
  "amount",
  "capacity",
  "id",
]);
</script>
  
  <style lang="scss" scoped>
</style>