<template>
  <div class="w-full justify-center flex">
    <modal-confirm v-if="confirmed" />
    <modal-reservation v-if="show" @close="closeConfirm" @confirm="confirm" />
    <div class="w-[80%] py-5 space-y-5">
      <div>
        <div class="font-bold text-[1.5rem]">PEJATEN</div>
        <div class="text-[1rem]">Jl. Malakaji jawa tengah</div>
      </div>
      <div
        class="grid grid-cols-6 gap-y-[4rem] divide-x-2 divide-dashed divide-gray-200 divide-current"
      >
        <div @click="showModal">
          <Card
            name="A-1"
            location="malakaji"
            capacity="200"
            isAvailable="available"
            >ahhay</Card
          >
        </div>
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

const show = ref(false);
const confirmed = ref(false);

definePageMeta({
  layout: "default",
});
const { id } = useRoute().params;

const showModal = () => {
  show.value = true;
};
const closeConfirm = () => {
  show.value = false;
};

const confirm = () => {
  confirmed.value = true;
  show.value = false;
};
</script>
  