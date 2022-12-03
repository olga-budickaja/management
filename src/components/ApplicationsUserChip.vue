<template>
  <div class="pt-xl-0 pt-md-0 pt-sm-2">
    <v-chip small v-if="app.user === userId" color="cyan lighten-5" class="mr-3">
      {{ app.roles }}

    </v-chip>
  </div>

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