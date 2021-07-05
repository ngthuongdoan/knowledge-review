<template>
  <div
    class="
      min-w-full
      bg-white
      text-black
      flex
      items-center
      rounded
      px-3
      py-2
      my-3
      shadow-md
    "
  >
    <div class="flex flex-col flex-grow">
      <the-title :title="todo.title"></the-title>
      <the-subtitle :subtitle="todo.time"></the-subtitle>
      <the-subtitle :subtitle="todo.description"></the-subtitle>
    </div>
    <button class="rounded-full border-2 w-5 h-5 border-black"></button>
  </div>
</template>

<script>
import TheTitle from '@/components/atoms/TheTitle/TheTitle.vue';
import TheSubtitle from '@/components/atoms/TheSubtitle/TheSubtitle.vue';

export default {
  name: 'TheTodo',
  components: {
    TheTitle,
    TheSubtitle,
  },
  props: {
    todo: {
      type: Object,
      required: true,
      validate(todo) {
        const validKey = ['_id', 'title', 'time', 'status', 'description'];
        return Object.keys(todo).every((e) => validKey.includes(e));
      },
    },
  },
};
</script>

<style scoped></style>
