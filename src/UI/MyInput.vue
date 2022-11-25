<template>
  <v-text-field
      :v-model="modelValue"
      :label="label"
      :value="modelValue"
      @input="updateInput"
      type="text"
      color="grey lighten-1"
      :rules="rules"
      multiple
      outlined
  />
</template>

<script>
export default {
  name: 'my-input',
  model: {
    prop: 'input',
    event: 'input'
  },
  props: {
    modelValue: [String, Number],
    label: String,
    rules: Array
  },
  input: {
    type: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:input', event)
    },
  }
}
</script>

<style scoped>

</style>