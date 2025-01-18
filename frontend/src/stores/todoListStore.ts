// import { date as dateUtils } from 'quasar';
import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import { Task, createNewTask } from 'presenters/models';

/** todo listを管理するStore */
export const useTodoListStore = defineStore(
  'todoList',
  () => {
    /** 管理中のタスク一覧 */
    const tasks: Ref<Task[]> = ref(getDummyTasks());

    const todayTasks = computed(() => {
      // TODO: 実装する。
      return tasks.value;
    });

    return {
      tasks,
      todayTasks,
    };
  },
  { persist: true }
);

// TODO: 削除する
const getDummyTasks = (total?: number): Task[] => {
  const tasks: Task[] = [];
  for (let i = 0; i < (total ?? 5); i++) {
    tasks.push(createNewTask(`Task ${i}`, 'all'));
  }
  return tasks;
};
