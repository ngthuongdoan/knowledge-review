<template>
  <div
    class="
      absolute
      top-0
      bottom-0
      left-0
      right-0
      flex
      items-center
      justify-center
    "
  >
    <the-form @closeModal="$emit('closeModal')"></the-form>
  </div>
</template>

<script>
import TheForm from '@/components/orgarnisms/TheForm/TheForm.vue';
export default {
  components: { TheForm },
};
</script>

<style></style>
