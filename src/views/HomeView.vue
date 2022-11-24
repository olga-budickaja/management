<template>
  <v-layout row col-12 class="height">
    <v-flex md4/>
    <v-flex md4 class="text-center mr-16 align-self-center">
      <img class="main-icon" src="../assets/icons/main-icon.svg" alt="Create User">
      <h1 class="text-h4 ml-16 text-center">Add a new user.</h1>
      <router-link to="/form-create-user">
        <v-btn color="cyan" class="white--text pl-16 pr-16 mt-16 ml-16">
          <v-icon left dark>mdi-account-plus-outline</v-icon>
          Create User
        </v-btn>
      </router-link>
    </v-flex>
    <v-flex md4/>
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
