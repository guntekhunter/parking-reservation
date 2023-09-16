<template>
  <div class="flex w-full justify-center">
    <div class="w-[80%] py-5">
      <div v-if="parkingSpots" class="grid grid-cols-3 gap-4">
        <CardPlace
          v-for="p in parkingSpots.data"
          :key="p.id"
          :id="p.id"
          :name="p.name"
          :location="p.location"
          :amount="p.amount"
          :capacity="p.spots"
          :image="p.image"
        />
      </div>
      <div v-else>Loading data...</div>
    </div>
  </div>
</template>
<script setup>
import CardPlace from "../../components/cardPlace.vue";

const { pending, data: parkingSpots } = useLazyFetch(
  "http://localhost:3001/parking-place"
);
</script>

