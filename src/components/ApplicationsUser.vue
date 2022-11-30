<template>
  <span v-if="app.user === userId" class="mr-3 chip">
    {{ app.roles }}

  </span>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      required: true,
    },
    app: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>