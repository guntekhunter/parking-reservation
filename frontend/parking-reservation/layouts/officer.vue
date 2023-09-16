<template>
  <div>
    <header>
      <nav
        class="py-[.8rem] flex justify-around bg-white border-b-[1.5px] sticky top-0 inset-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md z-10"
      >
        <div class="w-[80%] flex justify-between">
          <div class="flex space-x-[2rem]">
            <p class="font-bold flex items-center">PARKING</p>
          </div>
          <div class="flex items-center space-x-[1rem]">
            <p>ommaleka</p>
            <button
              class="w-[2rem] h-[2rem] bg-black rounded-full"
              @click="handleDrop"
            />
            <NuxtLink
              to="/"
              :class="{
                hidden: !show,
                '': show,
              }"
              class="z-10 absolute top-[4rem] right-[10%] px-[1rem] py-[.3rem] rounded-md shadow-md hover:bg-gray-100"
            >
              Logout
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>
  
<script setup>
const show = ref(false);

const handleDrop = () => {
  show.value = !show.value;
};
</script>
  