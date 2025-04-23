<script setup>
import { computed } from 'vue';

const props = defineProps(['title', 'checked']);
const emit = defineEmits(['update:checked']);
const checked = computed({
  get: () => props.checked,
  set: (val) => emit('update:checked', val),
});
</script>

<template>
  <label class="task" :class="checked ? 'task-done' : ''">
    <input type="checkbox" v-model="checked" />
    <span>{{ title }}</span>
  </label>
</template>

<style scoped lang="postcss">
.task {
  display: flex;
  align-items: center;
  gap: 10px;
  &-done {
    color: rgba(0, 0, 0, 0.5);
  }
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  accent-color: rgba(0, 0, 0, 0.5); /* цвет галочки */
  cursor: pointer;
  flex-shrink: 0;
}
</style>
