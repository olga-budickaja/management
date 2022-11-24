<template>
  <v-progress-circular
      :size="50"
      color="cyan"
      indeterminate
      class="progress"
  >
  </v-progress-circular>
</template>

<script>
export default {
  name: 'my-loader'
}
</script>

<style scoped>
.progress {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>