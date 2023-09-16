<template>
  <div class="w-full justify-center flex">
    <modal-confirm v-if="confirmed" />
    <modal-reservation
      v-if="show"
      @close="closeConfirm"
      @confirm="confirm"
      :placeId="placeId"
      :spotId="spotId"
      :location="parkingSpots.place.location"
      :amount="parkingSpots.place.amount"
      :spotName="spotName"
    />
    <div class="w-[80%] py-5 space-y-5">
      <div>
        <div class="font-bold text-[1.5rem]">{{ parkingSpots.place.name }}</div>
        <div class="text-[1rem]">{{ parkingSpots.place.location }}</div>
      </div>
      <div
        class="grid grid-cols-6 gap-y-[4rem] divide-x-2 divide-dashed divide-gray-200 divide-current"
      >
        <Card
          v-for="p in parkingSpots.spots"
          :key="p.id"
          @click="showModal(p.id, p.name)"
          :name="p.name"
          :isAvailable="p.isAvailable"
        />
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
const spotId = ref(null);
const spotName = ref(null);

const showModal = (id, name) => {
  show.value = true;
  spotId.value = id;
  spotName.value = name;
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
  