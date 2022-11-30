<template>
  <v-form
      @submit.prevent="onSubmit"
  >
    <MyInputAddUser
        v-model="login"
        label="username"
        hide-details="auto"
        :value="login"
    />
    <MyInputAddUser
        v-model="password"
        label="password"
        hide-details="auto"
        :value="password"
        :type="show ? 'text' : 'password'"
    />
    <div>
      <v-btn
          dark
          small
          width="120"
          type="submit"
          color="cyan darken-1"
      >
        Log in
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import MyInputAddUser from "@/UI/MyInputAddUser";
export default {
  name: 'my-login',
  components: {MyInputAddUser},
  data: () => ({
    value: String,
    login: '',
    password: '',
    show: false,
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('authModule/onLogin', {
        login: this.login,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>