<template>
  <div class="flex w-full justify-center">
    <div class="w-[80%] py-5">
      <div class="grid grid-cols-4 gap-4">
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardPlace />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardPlace from "../../components/cardPlace.vue";
</script>