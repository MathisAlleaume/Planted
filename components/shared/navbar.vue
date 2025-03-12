<template>
  <div class="w-full h-[60px] flex justify-between items-center mb-2">
    <div class="flex flex-row gap-2 items-center">
      <img src="/assets/svg/plante1.svg" alt="" class="w-[40px] h-[40px]" />
      <div class="text-[40px] font-normal font-['Soulway_Demo'] text-[#116a1c]">
        PLANTED
      </div>
      <img src="/assets/svg/plante2.svg" alt="" class="w-[40px] h-[40px]" />
    </div>

    <div>
      <div
        class="text-[20px] font-normal font-['Soulway_Demo'] cursor-pointer"
        v-if="route.path === '/'"
        @click="goTo('/store')">
        Store
      </div>
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Cart from "~/components/store/cart.vue";

  const route = useRoute();
  const goTo = (path: string) => {
    console.log("go to store");
    navigateTo(path);
  };
</script>
