<template>
  <p class="italic text-xs">{{ subtitle }}</p>
</template>

<script>
export default {
  name: "TheSubtitle",
  props: {
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
