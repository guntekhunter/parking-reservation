<template>
  <div class="w-full justify-center flex">
    <div class="w-[80%] py-5">
      <div
        class="grid grid-cols-6 gap-y-[4rem] divide-x-2 divide-dashed divide-gray-200 divide-current"
      >
        <Card
          name="A-1"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="A-2"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="A-3"
          location="malakaji"
          capacity="200"
          isAvailable="available"
          >ahhay</Card
        >
        <Card
          name="A-4"
          location="malakaji"
          capacity="200"
          isAvailable="not available"
          >ahhay</Card
        >
        <Card
          name="A-4"
          location="malakaji"
          capacity="200"
          isAvailable="not available"
          >ahhay</Card
        >
        <Card
          name="A-4"
          location="malakaji"
          capacity="200"
          isAvailable="not available"
          >ahhay</Card
        >
        <Card
          name="A-4"
          location="malakaji"
          capacity="200"
          isAvailable="not available"
          >ahhay</Card
        >
        <Card
          name="A-4"
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
