<template>
  <div
    class="
      relative
      w-screen
      max-h-screen
      flex flex-col
      justify-center
      items-center
      p-10
    "
  >
    <Nuxt />
  </div>
</template>

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
</style>
