<template>
  <div class="flex flex-col gap-2 mx-4 my-3">
    <the-label :name="name" :label="label"></the-label>
    <the-input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :pattern="pattern || ''"
      :minValue="minValue || ''"
      :maxValue="maxValue || ''"
      @onChange="$emit('onChange', $event)"
    ></the-input>
  </div>
</template>

<script>
import TheLabel from '@/components/atoms/TheLabel/TheLabel.vue';
import TheInput from '@/components/atoms/TheInput/TheInput.vue';
export default {
  components: {
    TheLabel,
    TheInput,
  },
  props: {
    name: {
      type: String,
    },
    label: {
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
    value: {
      type: String,
      default: '',
    },
    pattern: {
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
};
</script>
