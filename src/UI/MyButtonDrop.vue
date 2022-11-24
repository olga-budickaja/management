<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon left>{{ btn.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ btn.name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'my-button-drop',
  props: {
    btn: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>