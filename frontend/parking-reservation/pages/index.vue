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
          v-model="emailValue"
        />
      </div>
      <div class="space-y-2">
        <p class="text-[.9rem]">Password</p>
        <div>
          <input
            class="w-full h-[2rem] px-[1rem] rounded-md border-[1.4px] border-gray-200 text-[.9rem]"
            type="password"
            autoComplete="off"
            v-model="passwordValue"
          />
          <Image src="" alt="" />
        </div>
      </div>
      <div class="flex justify-around pt-[1rem]">
        <NuxtLink
          @click="login"
          class="px-[1rem] rounded-md bg-[#793FDF] text-white w-full h-[2.5rem] hover:bg-[#793FDF] flex justify-around items-center"
        >
          <p>Login</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "login",
});

const router = useRouter();

const emailValue = ref("");
const passwordValue = ref("");

const login = async () => {
  const { data: responseData } = await useFetch(
    "http://localhost:3001/users/login",
    {
      method: "post",
      body: {
        email: emailValue.value,
        password: passwordValue.value,
      },
    }
  );
  if (responseData.value.isOfficer !== true) {
    localStorage.setItem("user", responseData.value.id);
    router.push("/parking-places");
  } else {
    localStorage.setItem("user", responseData.value.id);
    router.push("/officer");
  }
};
</script>