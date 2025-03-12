<template>
  <div
    class="w-full flex flex-col justify-end items-start p-4 bg-cover bg-center rounded-4xl text-white relative gradient-overlay"
    :style="`background-image: url(${product.image})`">
    <div class="absolute top-4 right-4 flex gap-2">
      <div
        class="text-xs bg-white text-black px-4 py-2 rounded-full shadow-lg z-10">
        {{ product.price }} €
      </div>

      <div
        class="text-xs bg-white text-black px-4 py-2 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-200 transition-all duration-100">
        Voir le produit
      </div>
      <div
        class="text-xs bg-white text-black px-4 py-2 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-200 transition-all duration-100">
        <Icon name="heroicons:shopping-cart" class="w-4 h-4" />
      </div>
    </div>
    <div class="text-[40px] tracking-wide font-normal font-['Inter'] z-10">
      {{ product.name }}
    </div>
    <div class="text-[20px] font-normal font-['Inter'] z-10">
      {{ product.description }}
    </div>
  </div>
</template>

<style scoped>
  .gradient-overlay {
    position: relative;
  }

  .gradient-overlay::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 100%
    );
    border-radius: 2rem;
    pointer-events: none;
    z-index: 1;
  }
</style>

<script setup lang="ts">
  import {Product} from "~/classes/product";
  const props = defineProps({
    product: {
      type: Product,
      required: true,
    },
  });
</script>
