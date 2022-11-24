<template>
  <nav class="navbar">
    <v-app-bar
        color="cyan"
        dark
        app
    >
      <v-btn icon class="ml-10">
        <v-icon size="40" class="relative__icon">mdi-lock-outline</v-icon>
        <v-icon size="15" class="btn__gag" color="cyan">mdi-square</v-icon>
        <v-icon size="40" class="absolute__icon">mdi-lock-open-variant-outline</v-icon>
      </v-btn>

      <v-toolbar-title class="ml-6" @click="$router.push('/')">Usermanagement</v-toolbar-title>

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
.relative__icon{
  position: relative;
  margin-top: -3px;
}
.btn__gag {
  position: absolute;
  top: 9px;
  left: 21px;
}
.absolute__icon {
  position: absolute;
  top: 7px;
  left: 32px;
}
</style>