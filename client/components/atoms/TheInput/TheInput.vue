<template>
  <input
    v-model="variable"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :pattern="pattern"
    :min="minValue"
    :max="maxValue"
    class="border-gray-500 px-3 py-2 text-sm"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Type here...',
    },
    type: {
      type: String,
      default: 'text',
    },
    pattern: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    minValue: {
      type: String,
      default: '',
    },
    maxValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      variable: '',
    };
  },
  watch: {
    variable() {
      this.$emit('onChange', { [this.name]: this.variable });
    },
  },
};
</script>
