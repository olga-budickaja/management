<template>
  <v-layout row col-12 class="height">
    <v-flex md4/>
    <v-flex md4 class="text-center mr-16 align-self-center">
      <img class="main-icon" src="../assets/icons/main-icon.svg" alt="Create User">
      <h1 class="text-h4 ml-16 text-center">{{ $t('title.main') }}</h1>
      <router-link :to="{name: 'form-create-user', params: {lang: this.$i18n.locale}}">
        <v-btn
            color="cyan"
            class="white--text pl-xl-16 pr-xl-16 pl-md-16 pr-md-16 mt-16 ml-16 pl-sm-3 pl-xs-3 pr-xs-3 pr-sm-3"
        >
          <v-icon left dark>mdi-account-plus-outline</v-icon>
          {{ $t('buttons.main') }}
        </v-btn>
      </router-link>
    </v-flex>
    <v-flex md4/>
  </v-layout>

</template>

<script>
export default {
  name: 'home',
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  },
}
</script>

<style>
.main-icon {
  width: 100%;
}
</style>
