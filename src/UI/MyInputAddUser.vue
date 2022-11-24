<template>
  <v-text-field
      :append-icon="icon"
      :v-model="valueModel"
      :value="valueModel"
      :label="label"
      :rules="inputRules"
      :error-messages="error"
      :type="type"
      @input="updateInput"
      color="grey lighten-1"
      outlined
  ></v-text-field>
</template>

<script>
export default {
  name: 'my-input-add-user',
  props: {
    modelValue: [String, Number],
    valueModel: Array,
    label: String,
    value: String,
    inputRules: Array,
    error: Array,
    type: String,
    icon: Array
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event)
    },
  }
}
</script>

<style scoped>

</style>