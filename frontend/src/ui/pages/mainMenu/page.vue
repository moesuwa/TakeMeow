<script setup lang="ts">
import backgroundImg from 'ui/components/backgroundImg.vue';
import dashboard from 'ui/components/dashboard.vue';
import gridMenu from 'ui/components/gridMenu.vue';
import layout from 'ui/pages/mainMenu/layout.vue';
</script>
<template>
  <background-img />
  <layout>
    <template #dashboard>
      <dashboard />
    </template>
    <template #menu-items>
      <gridMenu />
    </template>
  </layout>
</template>
