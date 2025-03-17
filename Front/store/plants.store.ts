import {defineStore} from "pinia";
import {Product} from "~/classes/product";

export const usePlantsStore = defineStore("plants", () => {
  const plants = ref<Product[]>([]);

  const fetchPlants = async () => {
    const response = await $fetch<Product[]>("http://localhost:3030/products");
    plants.value = response;
  };

  onMounted(async () => {
    await fetchPlants();
  });

  return {
    plants,
    fetchPlants,
  };
});
