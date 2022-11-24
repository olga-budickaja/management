<template>
  <v-toolbar flat fab class="toolbar border2 mt-2">
    <v-toolbar-title
        class="text-h4 mx-14 text--lighten-10"
    >
      Users
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/form-create-user">
      <v-btn
          class="mx-10"
          fab
          light
          small
          color="white"
      >
        <v-icon dark color="cyan">
          mdi-plus
        </v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>