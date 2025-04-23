import { ref, computed, watch, onBeforeMount } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasksStore', () => {
  const tasks = ref([]);

  const activeTasks = computed(() => {
    return tasks.value.filter(task => task.done == false);
  });

  watch(() => tasks.value, (newValue) => {
    if(newValue) {
      localStorage.setItem('tasks', JSON.stringify(newValue));
    }
  }, { deep: true });

  onBeforeMount(async() => {
    if(localStorage.getItem('tasks')) {
      tasks.value = JSON.parse(localStorage.getItem('tasks'));
    } else {
      const response = await fetch('./tasks.json');
      tasks.value = await response.json();
    }
  });

  return { tasks, activeTasks };
});
