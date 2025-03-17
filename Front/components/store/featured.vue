<template>
  <div
    class="w-full flex flex-col justify-end items-start min-h-[400px] sm:min-h-[400px] p-4 sm:p-4 bg-cover bg-center rounded-4xl text-white relative gradient-overlay bg-gray-200"
    :style="product ? `background-image: url(${product.image})` : ''">
    <div
      class="hidden sm:flex absolute top-2 sm:top-4 right-2 sm:right-4 gap-1 sm:gap-2">
      <div
        class="text-[10px] sm:text-xs bg-white text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg z-10"
        v-if="product">
        {{ product.price }} €
      </div>

      <a
        class="text-[10px] sm:text-xs bg-white text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-200 transition-all duration-100"
        :href="`#product-${product.id}`">
        Voir le produit
      </a>
      <div
        class="text-[10px] sm:text-xs bg-white text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-200 transition-all duration-100">
        <Icon name="heroicons:shopping-cart" class="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
    </div>
    <div
      class="text-[24px] sm:text-[40px] tracking-wide font-normal font-['Inter'] z-10"
      v>
      {{ product.name }}
    </div>
    ç
    <div class="text-[16px] sm:text-[20px] font-normal font-['Inter'] z-10">
      {{ product.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import {usePlantsStore} from "~/store/plants.store";
  const plantStore = usePlantsStore();

  const product = computed(() => {
    let randomIndex = Math.floor(Math.random() * plantStore.plants.length);
    if (plantStore.plants.length > 0) {
      return plantStore.plants[randomIndex];
    }
    return {
      name: "",
      description: "",
      price: 0,
      image: "",
      id: -1,
    };
  });
</script>

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
