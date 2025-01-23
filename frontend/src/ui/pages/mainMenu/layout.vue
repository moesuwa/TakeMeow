<template>
  <div class="page-template">
    <div class="area-title">
      <div class="box-title" v-text="$t('defaultLabels.appTitle')" />
    </div>
    <div class="area-dashboard">
      <slot name="dashboard" />
    </div>
    <div class="area-menu">
      <slot name="menu-items" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'src/css/app.scss';

.page-template {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 50% 30%;
  .area-title {
    @include full-size;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .box-title {
      @include title-text;
      margin: $small-margin;
    }
  }
  .area-dashboard {
    width: calc(100% - #{$large-margin} * 2);
    height: 100%;
    margin: 0 #{$large-margin};
  }
  .area-menu {
    width: calc(100% - #{$large-margin} * 2);
    height: calc(100% - #{$default-margin});
    margin: 0 #{$large-margin} #{$default-margin} #{$large-margin};
    @include flex-center;
  }
}
</style>
