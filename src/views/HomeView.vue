<template>
  <v-layout row col-12 class="height">
    <v-flex md3/>
    <v-flex md6 class="text-center mt-16">
      <img class="main-icon" src="../assets/icons/main-icon.svg" alt="Create User">
      <h1 class="text-h4 text-center">Add a new user.</h1>
      <v-btn color="cyan white--text pl-16 pr-16 mt-16">
        <v-icon left dark>mdi-account-plus-outline</v-icon>
        Create User
      </v-btn>
    </v-flex>
    <v-flex md3/>
  </v-layout>

</template>

<script>


  export default {
    name: 'home',

    components: {

    },
  }
</script>

<style>
.main-icon {
  width: 100%;
}
</style>
