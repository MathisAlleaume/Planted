<template>
  <div
    class="flex flex-col gap-[20px] md:gap-[30px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[30rem] py-6 md:py-[3rem] justify-between items-center">
    <div
      class="text-[32px] md:text-[40px] font-normal font-['Soulway_Demo'] text-center">
      Derniers Arrivages
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
    <div
      class="text-center text-sm font-normal font-['Inter'] shadow-sm bg-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-100"
      @click="navigateTo('/store')">
      Voir plus
    </div>
  </div>
</template>

<script setup>
  import Product from "../store/product.vue";
  import {usePlantsStore} from "~/store/plants.store";
  const products = usePlantsStore().plants.slice(0, 3);
</script>
