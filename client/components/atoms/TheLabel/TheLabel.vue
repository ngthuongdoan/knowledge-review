<template>
  <label :for="name" class="text-sm text-gray-500 capitalize"
    >{{ label }}:</label
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
