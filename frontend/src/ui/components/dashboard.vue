<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCatProfileStore } from 'stores/profileStore';
import ProfilePicture from 'ui/components/profilePicture.vue';
import TodoList from 'ui/components/todoList.vue';
const catProfileStore = useCatProfileStore();
const cats = computed(() => [...catProfileStore.profiles.values()]);
const tab = ref(cats.value[0]?.id ?? '');
</script>
<template>
  <div class="area-dashboard">
    <q-tabs v-model="tab" align="justify" class="box-tabs">
      <template v-for="cat in cats" :key="cat.id">
        <q-tab :name="cat.id" :label="cat.name" />
      </template>
    </q-tabs>
    <q-tab-panels v-model="tab" animated class="background-tab-panels">
      <template v-for="cat in cats" :key="cat.id">
        <div :name="cat.id" class="area-tab-panels">
          <div class="box-picture">
            <profile-picture />
          </div>
          <div class="box-todo">
            <todo-list />
          </div>
          <div class="box-summary">
            <div style="width: 100%; height: 100%" />
          </div>
        </div>
      </template>
    </q-tab-panels>
  </div>
</template>
<style lang="scss" scoped>
@import 'src/css/app.scss';

.area-dashboard {
  @include full-size;
  @include default-border;
  display: grid;
  grid-template-rows: auto 1fr;
  .box-tabs {
    @include flex-center;
    @include background-clear-white;
    border-radius: 20px 20px 0 0;
  }
  .background-tab-panels {
    @include background-clear-white;
    border-radius: 0 0 20px 20px;
  }
  .area-tab-panels {
    @include full-size;
    display: grid;
    grid-template-columns: #{$picture-width} 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  .box-picture {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box-todo {
    grid-area: 1 / 2 / 2 / 3;
  }
  .box-summary {
    grid-area: 2 / 1 / 3 / 3;
  }
}
</style>
