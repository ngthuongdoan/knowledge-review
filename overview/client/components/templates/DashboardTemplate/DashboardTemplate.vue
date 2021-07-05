<template>
  <div
    class="relative w-full h-screen flex flex-col items-center justify-center"
  >
    <add-modal v-if="isOpen" @closeModal="isOpen = false"></add-modal>
    <the-button
      class="bg-green-500 text-white justify-self-start"
      title="Add Todo"
      @click.native="isOpen = true"
    ></the-button>
    <todo-container :todos="todos"></todo-container>
  </div>
</template>

<script>
import TheButton from '@/components/atoms/TheButton/TheButton.vue';
import TodoContainer from '@/components/orgarnisms/TodoContainer/TodoContainer.vue';
import AddModal from '@/components/templates/AddModal/AddModal.vue';

export default {
  components: {
    TheButton,
    TodoContainer,
    AddModal,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
