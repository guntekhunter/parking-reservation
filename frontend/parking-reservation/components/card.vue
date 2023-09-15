<template>
  <div
    :class="{ 'hover:bg-gray-200': !show, 'bg-gray-100': show }"
    class="p-5 duration-200 border-dashed border-t-2 h-[13rem]"
  >
    <div
      :class="{ hidden: !show, '': show }"
      class="h-full p-[.5srem] space-y-4"
    >
      <div
        class="bg-green-200 border-green-400 border border-1 rounded-md py-2 px-2 text-[.8rem] text-green-400 flex justify-center"
      >
        Yours
      </div>
      <div class="flex justify-center">
        <img src="~/assets/image/car.png" alt="" class="w-[4rem]" />
      </div>
    </div>
    <div
      class="p-y-[4rem] h-[10rem] items-center flex"
      :class="{ hidden: show, '': !show }"
    >
      <div class="w-full flex justify-center text-[1.5rem] font-bold">
        {{ name.toUpperCase() }}
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

if (!isAvailable) {
  show = true;
}
</script>