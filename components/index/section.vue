<template>
  <div
    class="flex flex-col md:flex-row gap-5 md:gap-10 bg-[#ed914a] rounded-[10px] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[25rem] py-6 md:py-[3rem] items-center justify-center">
    <slot name="leadingIcon" />
    <div class="flex flex-col gap-2 w-full md:max-w-[600px]">
      <div
        class="flex flex-row gap-2 text-white font-bold text-2xl sm:text-3xl md:text-[40px] font-['Soulway_Demo'] text-justify md:text-left">
        <slot
          name="title"
          class="text-white font-normal font-['Soulway_Demo'] text-center md:text-left" />
      </div>
      <div
        class="flex flex-row gap-2 text-white text-base sm:text-lg font-['Inter'] text-justify">
        <slot
          name="description"
          class="text-white font-normal font-['Inter']" />
      </div>
    </div>
    <slot name="trailingIcon" />
  </div>
</template>

<script setup>
  defineProps({});
</script>
