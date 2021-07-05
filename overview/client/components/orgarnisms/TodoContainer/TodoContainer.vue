<template>
  <div class="w-full max-h-60 overflow-auto">
    <the-todo v-for="todo in todos" :key="todo.id" :todo="todo"></the-todo>
  </div>
</template>

<script>
import TheTodo from '@/components/molecules/TheTodo/TheTodo';
export default {
  components: {
    TheTodo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
