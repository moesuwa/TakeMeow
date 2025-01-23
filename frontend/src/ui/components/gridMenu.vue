<script setup lang="ts">
import appItem from 'ui/components/appItem.vue';
</script>
<template>
  <div class="grid-menu">
    <template v-for="_i in 8" :key="_i">
      <appItem />
    </template>
  </div>
</template>
<style scoped lang="scss">
@import 'src/css/app.scss';
.grid-menu {
  @include calc-margin-full-size(1rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>
