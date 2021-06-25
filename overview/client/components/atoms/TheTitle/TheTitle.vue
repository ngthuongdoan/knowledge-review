<template>
  <h1 class="font-bold text-lg">{{ title }}</h1>
</template>

<script>
export default {
  name: "TheTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
