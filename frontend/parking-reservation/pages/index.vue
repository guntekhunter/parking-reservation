<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div
      class="p-[4rem] space-y-[1rem] w-[30rem] rounded-md shadow-md bg-white"
    >
      <p class="flex justify-center font-bold">LOGIN</p>
      <div class="w-full space-y-2">
        <p class="text-[.9rem]">Email</p>
        <input
          class="w-full h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
          type="text"
          autoComplete="off"
        />
      </div>
      <div class="space-y-2">
        <p class="text-[.9rem]">Password</p>
        <div>
          <input
            class="w-full h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
            type="password"
            autoComplete="off"
          />
          <Image src="" alt="" />
        </div>
      </div>
      <div
        class="bg-red-200 h-[2rem] flex items-center pl-4 rounded-md border-[1.4px] border-red-300 ${ error"
      >
        <p class="text-[.8rem] text-red-500 ${error ?">asdasd</p>
      </div>
      <div class="flex justify-around pt-[1rem]">
        <NuxtLink
          to="/parking-spots"
          onClick="{loginHandler}"
          class="px-[1rem] rounded-md bg-[#793FDF] text-white w-full h-[2.5rem] hover:bg-[#793FDF] flex justify-around items-center"
        >
          <p>Login</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
</script>