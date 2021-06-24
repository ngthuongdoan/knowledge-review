<template>
  <div class="relative w-screen max-h-screen flex flex-col justify-center items-center p-10">
    <div v-if="isAdd" class="absolute z-10 flex justify-center items-center w-full h-screen bg-overlay">
      <AddTodo @close="isAdd=!isAdd"></AddTodo>
    </div>
    <button class="bg-green-500 text-white font-bold rounded p-3" type="button" @click="isAdd=!isAdd">
      Add Todo
    </button>
    <Nuxt />
  </div>
</template>

<script>
import AddTodo from "~/components/AddTodo";

export default {
  components: {
    AddTodo
  },
  data() {
    return {
      isAdd: false,
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #faf1e6;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
