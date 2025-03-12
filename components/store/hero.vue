<template>
  <div class="w-full min-h-[600px] h-2/3 flex gap-4">
    <Featured :product="featured" />
    <div class="w-2/3 h-full flex flex-col justify-between gap-4">
      <div
        class="w-full bg-[#51785A] text-white rounded-4xl px-12 py-4 flex flex-col justify-between">
        <div class="text-[50px] font-thin tracking-wide font-['Inter'] mb-8">
          Un intérieur beau, durable et responsable.
        </div>
        <div
          class="text-[20px] font-['Inter'] font-light mb-8 text-white text-justify">
          Aujourd’hui, aménager son espace ne se résume plus à choisir du
          mobilier esthétique. C’est aussi un engagement pour un mode de vie
          plus respectueux de l’environnement. Chez <b>PLANTED</b>, nous
          sélectionnons des pièces conçues à partir de matériaux durables,
          recyclés ou issus de filières responsables. Chaque meuble et objet
          déco allie design intemporel et impact positif, pour que votre
          intérieur reflète vos valeurs tout en restant élégant et fonctionnel.
          Adoptez une décoration qui a du sens, sans compromis sur le style. 🌱
        </div>
        <div class="flex flex-row gap-2 w-full justify-end">
          <div
            class="bg-white px-4 py-2 w-fit rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-100 text-black"
            @click="navigateTo('/')">
            A propos de PLANTED
          </div>
          <div></div>
        </div>
      </div>
      <div class="w-full h-full flex gap-4 flex-1">
        <div
          class="w-full bg-gray-100/50 rounded-4xl p-12 bg-cover bg-center h-full"
          style="
            background-image: url('https://images.unsplash.com/photo-1623173508476-9883063f904b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
        <div
          class="w-full bg-gray-100/50 rounded-4xl p-12 bg-cover bg-center"
          style="
            background-image: url('https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
        <div
          class="w-full bg-gray-100/50 rounded-4xl p-12 bg-cover bg-center"
          style="
            background-image: url('https://images.unsplash.com/photo-1475541148680-00e4fb86ee25?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Featured from "~/pages/featured.vue";
  import {Product} from "~/classes/product";
  import {usePlantsStore} from "~/store/plants.store";

  const featured = ref({});
  onMounted(() => {
    const rdmNumber = Math.floor(
      Math.random() * usePlantsStore().plants.length
    );
    featured.value = usePlantsStore().plants[rdmNumber];
  });
</script>
