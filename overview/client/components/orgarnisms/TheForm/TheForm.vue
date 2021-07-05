<template>
  <form class="bg-gray-100 rounded-md p-7 shadow-lg">
    <the-form-control
      v-for="(field, index) in fields"
      :key="index"
      :label="field.label"
      :name="field.name"
      :type="field.type"
      :value="field.value"
      :placeholder="field.placeholder"
      @onChange="onChangeHandler"
    ></the-form-control>
    <the-button title="Create" @click.native="addTodo"></the-button>
    <the-button title="Cancel" @click.native="closeModal"></the-button>
  </form>
</template>

<script>
import TheFormControl from '@/components/molecules/TheFormControl/TheFormControl.vue';
import TheButton from '@/components/atoms/TheButton/TheButton.vue';
import { formControl } from '@/config/formControl';

export default {
  components: {
    TheFormControl,
    TheButton,
  },
  data() {
    return {
      fields: formControl,
      todo: {
        title: '',
        description: '',
        time: new Date(),
        status: 'none',
      },
    };
  },
  methods: {
    onChangeHandler(field) {
      const [key, value] = Object.entries(field)[0];
      this.todo[key] = value;
    },
    closeModal() {
      this.$emit('closeModal');
    },
    async addTodo() {
      this.$axios.$post('/todo', this.todo);
      // console.log(this.todo);
      this.closeModal();
    },
  },
};
</script>

<style></style>
