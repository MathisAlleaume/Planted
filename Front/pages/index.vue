<template>
  <div class="p-[20px] flex flex-col gap-4">
    <Navbar />
    <Hero />
    <div
      class="bg-[#e9762b] relative text-center justify-start text-white text-[20px] md:text-[40px] font-normal font-['Soulway_Demo'] rounded-[10px] p-[10px]">
      10 mars à Nantes - 12 mars à Angers - 15 mars Paris - 18 mars a Rennes
    </div>
    <div
      id="quickLinks"
      class="flex flex-col lg:flex-row gap-4 lg:gap-4 lg:flex-nowrap">
      <a
        href="#whyPlanted"
        class="relative bg-[#0d4715] rounded-[10px] p-[10px] text-white text-[20px] md:text-[32px] font-normal font-['Soulway_Demo'] w-full lg:w-1/3 min-h-[100px] md:min-h-[300px] flex items-center justify-center">
        Pourquoi Planted
      </a>
      <div
        class="relative bg-[#51785A] rounded-[10px] p-[10px] text-white text-[20px] md:text-[32px] font-normal font-['Soulway_Demo'] w-full lg:w-1/3 min-h-[100px] md:min-h-[300px] flex items-center justify-center cursor-pointer"
        @click="navigateTo('/store')">
        Le magasin
      </div>
      <a
        href="#boursePlantes"
        class="relative bg-[#0d4715] rounded-[10px] p-[10px] text-white text-[20px] md:text-[32px] font-normal font-['Soulway_Demo'] w-full lg:w-1/3 min-h-[100px] md:min-h-[300px] flex items-center justify-center">
        Une bourse au plantes engagée
      </a>
    </div>
    <Section id="whyPlanted">
      <template #title>
        {{ title1 }}
      </template>
      <template #description>
        {{ description1 }}
      </template>
      <template #trailingIcon>
        <img src="/assets/svg/plante1.svg" alt="plante1" />
      </template>
    </Section>
    <ProductList />
    <Section id="boursePlantes">
      <template #title>
        {{ title2 }}
      </template>
      <template #description>
        {{ description2 }}
      </template>
      <template #leadingIcon>
        <img src="/assets/svg/plante2.svg" alt="plante2" />
      </template>
    </Section>
    <Footer />
  </div>
</template>

<script setup>
  import {usePlantsStore} from "~/store/plants.store";
  import Hero from "../components/index/hero.vue";
  import ProductList from "../components/index/productList.vue";
  import Section from "../components/index/section.vue";
  import Navbar from "../components/shared/navbar.vue";
  import Footer from "../components/shared/footer.vue";
  const title1 = "Pourquoi Planted";
  const description1 =
    "Dans un monde où la biodiversité s'appauvrit et où la production de plantes reste souvent énergivore, Planted propose une alternative durable. En favorisant l'échange entre passionnés, nous encourageons une culture plus responsable et locale, réduisant ainsi l'empreinte carbone liée à l'achat de nouvelles plantes. Au-delà de l'impact environnemental, Planted est aussi une communauté. Échanger une plante, c'est transmettre un bout de son jardin, une histoire, un savoir-faire. C'est un moyen de créer du lien et de partager la passion du végétal dans une démarche éthique et respectueuse de la nature.";
  const title2 = "Une bourse au plantes engagée";
  const description2 =
    "Notre mission est simple : permettre à chacun de donner, échanger ou adopter des plantes facilement et gratuitement. En évitant l'achat systématique et en privilégiant la seconde vie des végétaux, nous participons activement à la réduction des déchets verts et du gaspillage horticole. Avec Planted, chaque plante trouve un nouveau foyer et continue de grandir. En rejoignant notre communauté, vous soutenez une initiative collective pour une nature plus riche, plus diversifiée et accessible à tous. 🌿";
</script>
