<template>
  <v-select
      :v-model="modelValueCheck"
      :items="items"
      :label="label"
      outlined
      attach
      chips
      height="45"
      color="cyan"
      multiple
      class="selectCheck"
  >

  </v-select>
</template>

<script>
export default {
  name: 'my-select-check',
  model: {
    prop: 'modelValueCheck',
    event: 'change'
  },
  props: {
    modelValueCheck: {
      type: String,
      default: String
    },
    items: Array,
    label: String
  },
}
</script>

<style scoped>

</style>