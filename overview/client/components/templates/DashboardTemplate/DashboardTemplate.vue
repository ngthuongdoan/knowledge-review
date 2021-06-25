<template>
  <div>
    <TheButton class="bg-green-500 text-white" title="Add Todo"></TheButton>
    <TodoContainer :todos="todos"></TodoContainer>
  </div>
</template>

<script>
import TheButton from '@/components/atoms/TheButton/TheButton';
import TodoContainer from '@/components/orgarnisms/TodoContainer/TodoContainer';

export default {
  components: {
    TheButton,
    TodoContainer,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
