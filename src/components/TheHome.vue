<script setup>
import { ref, computed } from 'vue';
import { useTasksStore } from '@/stores/tasksStore.js';

import AppTask from '@/components/AppTask.vue';

const tasksStore = useTasksStore();
const filterActive = ref(false);

const tasks = computed(() => {
  return filterActive.value ? tasksStore.activeTasks : tasksStore.tasks;
});
</script>

<template>
  <div class="card">
    <div class="card-filter">
      <label class="switch">
        <input type="checkbox" v-model="filterActive" />
        <div class="slider round"></div>
      </label>
      <span>Только активные</span>
    </div>
    <TransitionGroup name="list" tag="ul" class="card-tasks">
      <li v-for="task in tasks" :key="task.id">
        <AppTask :title="task.title" v-model:checked="task.done" />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="postcss">
.card {
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: rgb(255, 255, 255);

  li {
    list-style: none;
  }

  &-filter {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &-tasks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
