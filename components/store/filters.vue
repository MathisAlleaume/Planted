<template>
  <div class="h-[100px] flex justify-center items-center gap-4">
    <div
      v-for="item in items"
      :key="item.label"
      @click.stop="item.opened = !item.opened"
      class="bg-white px-4 py-2 rounded-md shadow-xs cursor-pointer">
      <div class="flex items-center gap-2">
        <span>{{ item.label }}</span>
        <Icon :name="item.icon" />
      </div>
      <div v-if="item.opened">
        <div v-for="subItem in item.subItems" :key="subItem.label">
          <span>{{ subItem.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      label: "Disponibilité",
      icon: "mdi:chevron-down",
      opened: false,
      subItems: [
        {label: "Disponible", icon: "mdi:check"},
        {label: "Indisponible", icon: "mdi:close"},
      ],
    },
    {
      label: "Prix",
      icon: "mdi:chevron-down",
      opened: false,
      subItems: [],
    },
    {
      label: "Arrosage",
      icon: "mdi:chevron-down",
      opened: false,
    },
    {
      label: "Exposition",
      icon: "mdi:chevron-down",
      opened: false,
    },
  ];
</script>
