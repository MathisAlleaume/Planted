<template>
  <div
    class="flex flex-row gap-10 bg-[#ed914a] rounded-[10px] px-[25rem] py-[3rem] items-center justify-center">
    <slot name="leadingIcon" />
    <div class="flex flex-col gap-2 max-w-[600px]">
      <div
        class="flex flex-row gap-2 text-white font-bold text-[40px] font-['Soulway_Demo']">
        <slot
          name="title"
          class="text-white text-[40px] font-normal font-['Soulway_Demo']" />
      </div>
      <div
        class="flex flex-row gap-2 text-white text-lg font-['Inter'] text-justify">
        <slot
          name="description"
          class="text-white text-[20px] font-normal font-['Inter']" />
      </div>
    </div>
    <slot name="trailingIcon" />
  </div>
</template>

<script setup>
  defineProps({});
</script>
