<template>
  <div class="app-item">
    <div class="tap-area" />
  </div>
</template>
<style scoped lang="scss">
@import 'src/css/app.scss';
.app-item {
  @include full-size-flex-center;
  .tap-area {
    width: $app-size;
    height: $app-size;
    border-radius: 30px;
    @include background-clear-white;
  }
}
</style>
