<template>
  <div class="w-1/2">
    <DashboardTemplate :todos="todos"></DashboardTemplate>
  </div>
</template>

<script>
import DashboardTemplate from '@/components/templates/DashboardTemplate/DashboardTemplate';

export default {
  components: {
    DashboardTemplate,
  },
  async asyncData(context) {
    const todos = await context.app.$axios.$get('/todo');
    return {
      todos,
    };
  },
};
</script>
