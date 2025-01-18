<!--
 タスクをチェックボックス形式で表示するコンポーネント。
  - 5件以下ならば全件表示
  - 【未実装】6件以上ならば4件表示、残りは【show more】ボタンで省略する。
  - 完了済みのタスクの表示/非表示は切り替え可能
  -->
<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { Task } from 'presenters/models';
import { useTodoListStore } from 'stores/todoListStore';
const todoListStore = useTodoListStore();

/** 表示するタスク一覧 */
const tasks: ComputedRef<Task[]> = computed(() => todoListStore.todayTasks);
</script>
<template>
  <div class="todo-list">
    <template v-for="task in tasks" :key="task.id">
      <div class="todo-item">
        <q-checkbox v-model="task.completed" :label="task.title" size="xl" color="green" />
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
@import 'src/css/app.scss';
.todo-list {
  @include calc-margin-full-size(1rem);
  flex-direction: column;
  .todo-item {
    @include flex-start;
    height: 20%;
    font-size: 2rem;
  }
}
</style>
