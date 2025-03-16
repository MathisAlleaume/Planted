import {defineStore} from "pinia";

export const usePlantsStore = defineStore("plants", () => {
  const plants = ref([]);

  const fetchPlants = async () => {
    const response = await $fetch("http://localhost:3030/products");
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
