<template>
  <div class="w-full justify-center flex">
    <div class="w-[80%] py-5">
      <div class="grid grid-cols-4 grid-flow-col gap-4">
        <Card
          name="C1"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="C2"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="C3"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="C4"
          location="malakaji"
          capacity="200"
          isAvailable="not available"
          >ahhay</Card
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../../components/card.vue";

definePageMeta({
  layout: "default",
});
</script>
