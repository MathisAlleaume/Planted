<template>
  <div class="w-full min-h-[600px] h-2/3 flex flex-col lg:flex-row gap-4">
    <Featured />
    <div class="w-full lg:w-2/3 h-full flex flex-col justify-between gap-4">
      <div
        class="w-full bg-[#51785A] text-white rounded-4xl px-4 sm:px-8 lg:px-12 py-4 flex flex-col justify-between gap-4">
        <div
          class="text-[30px] sm:text-[40px] lg:text-[50px] font-thin tracking-wide font-['Inter'] mb-4 lg:mb-8">
          Un intérieur beau, durable et responsable.
        </div>
        <div
          class="text-[16px] sm:text-[18px] lg:text-[20px] font-['Inter'] font-light mb-4 lg:mb-8 text-white text-justify">
          Aujourd'hui, aménager son espace ne se résume plus à choisir du
          mobilier esthétique. C'est aussi un engagement pour un mode de vie
          plus respectueux de l'environnement. Chez <b>PLANTED</b>, nous
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
      <div
        class="hidden sm:flex w-full h-full flex flex-col sm:flex-row gap-4 flex-1">
        <div
          class="w-full h-[200px] sm:h-full bg-gray-100/50 rounded-4xl p-6 sm:p-12 bg-cover bg-center"
          style="
            background-image: url('https://images.unsplash.com/photo-1623173508476-9883063f904b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
        <div
          class="w-full h-[200px] sm:h-full bg-gray-100/50 rounded-4xl p-6 sm:p-12 bg-cover bg-center hidden sm:block"
          style="
            background-image: url('https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
        <div
          class="w-full h-[200px] sm:h-full bg-gray-100/50 rounded-4xl p-6 sm:p-12 bg-cover bg-center hidden lg:block"
          style="
            background-image: url('https://images.unsplash.com/photo-1475541148680-00e4fb86ee25?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Featured from "~/components/store/featured.vue";
</script>
