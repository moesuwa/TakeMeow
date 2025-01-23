<script setup lang="ts">
import { computed } from 'vue';
// 画像のURLをランダムで決定する。
// TODO: あとで設定で変える
const imgUrl = computed(() => {
  // 1か2のどちらかがランダムで決まる。
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  return randomNumber === 1 ? 'src/public/background_calico.png' : 'src/public/background_ginger.png';
});
</script>
<template>
  <div class="background-img" :style="{ backgroundImage: `url(${imgUrl})` }" />
</template>
<style scoped lang="scss">
@import 'src/css/app.scss';

.background-img {
  @include full-size;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
