<template>
  <div class="w-full justify-center flex">
    <modal-confirm v-if="confirmed" />
    <modal-reservation v-if="show" @close="closeConfirm" @confirm="confirm" />
    <div class="w-[80%] py-5 space-y-5">
      <div>
        <NuxtLink to="/parking-places">Back</NuxtLink>
        <div class="font-bold text-[1.5rem]">PEJATEN</div>
        <div class="text-[1rem]">Jl. Malakaji jawa tengah</div>
      </div>
      <div
        class="grid grid-cols-6 gap-y-[4rem] divide-x-2 divide-dashed divide-gray-200 divide-current"
      >
        <Card
          v-for="p in parkingSpots"
          :key="p.id"
          @click="showModal"
          :name="p.name"
          location="malakaji"
          capacity="200"
          :isAvailable="p.isAvailable"
          >ahhay</Card
        >
      </div>
    </div>
  </div>
</template>
  
<script setup>
import Card from "../../components/card.vue";

const show = ref(false);
const confirmed = ref(false);

definePageMeta({
  layout: "default",
});
const { id } = useRoute().params;
const placeId = parseInt(id);

const showModal = () => {
  show.value = true;
};
const closeConfirm = () => {
  show.value = false;
};

const confirm = () => {
  confirmed.value = true;
  show.value = false;
  setTimeout(() => {
    confirmed.value = false;
  }, 3000);
};

const { pending, data: parkingSpots } = useLazyFetch(
  "http://localhost:3001/parking/parking-spots/" + placeId
);

console.log(parkingSpots);
</script>
  