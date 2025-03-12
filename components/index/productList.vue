<template>
  <div
    class="flex flex-col gap-[30px] px-[30rem] py-[3rem] justify-between items-center">
    <div class="text-[40px] font-normal font-['Soulway_Demo']">
      Derniers Arrivages
    </div>
    <div class="flex flex-row gap-2">
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
