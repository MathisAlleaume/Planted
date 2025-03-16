<template>
  <div
    class="w-full h-[60px] flex justify-center items-center mb-2 px-4 md:px-6">
    <div class="flex flex-row gap-1 md:gap-2 items-center">
      <img
        src="/assets/svg/plante1.svg"
        alt=""
        class="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      <div
        class="text-2xl md:text-[40px] font-normal font-['Soulway_Demo'] text-[#116a1c]">
        PLANTED
      </div>
      <img
        src="/assets/svg/plante2.svg"
        alt=""
        class="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
    </div>

    <div>
      <Cart v-if="route.path === '/store'" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Cart from "~/components/store/cart.vue";

  const route = useRoute();
  const goTo = (path: string) => {
    navigateTo(path);
  };
</script>
