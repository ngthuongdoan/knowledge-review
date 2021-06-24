<template>
  <div
    class="flex flex-col w-1/2 h-96 bg-white rounded"
  >
    <ValidationProvider v-slot="{ errors }">
      <input
        v-model="todo"
        class="border-2 border-black px-3 py-2"
        placeholder="Insert new todo"
        type="text"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <button type="button" class="self-center text-white bg-red-700 p-3" @click="$emit('close')">Cancel</button>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todo: "",
    }
  },
}
</script>
