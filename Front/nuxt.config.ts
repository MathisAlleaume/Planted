// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  ssr: false,

  css: ["~/assets/css/tailwind.css"],
  devtools: {enabled: true},
  compatibilityDate: "2025-03-07",
  modules: ["nuxt-icon-tw", "@pinia/nuxt"],
});
