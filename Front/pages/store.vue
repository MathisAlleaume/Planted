<template>
  <div class="w-full h-full px-4 sm:px-6 md:px-8 lg:px-[10rem] py-4">
    <Navbar />
    <Hero />
    <Filters />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Hero from "~/components/store/hero.vue";
  import Navbar from "~/components/shared/navbar.vue";
  import Filters from "~/components/store/filters.vue";
  import Product from "~/components/store/product.vue";
  import Footer from "~/components/shared/footer.vue";
  import {usePlantsStore} from "~/store/plants.store";

  const plantsStore = usePlantsStore();

  const products = computed(() => {
    return plantsStore.plants;
  });
</script>
