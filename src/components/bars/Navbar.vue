<template>
  <nav class="navbar">
    <v-app-bar
        color="cyan"
        dark
        app
    >
      <v-btn icon class="ml-10">
        <v-icon>mdi-lock-outline</v-icon>
        <v-icon>mdi-lock-open-variant-outline</v-icon>
      </v-btn>

      <v-toolbar-title @click="$router.push('/')">Usermanagement</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
          depressed
          fab
          small
          class="
          mr-10
          cyan--text
          text--white
          text-uppercase
          title
          "
          color="white"
      >
        jh
      </v-btn>

    </v-app-bar>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>