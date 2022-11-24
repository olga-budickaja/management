<template>
  <v-form
      class="formCreate"
      ref="form"
      @submit.prevent="handlerSubmit"
      v-if="!isLoading"
  >
      <v-layout row wrap col-12>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Surname"
              v-model="surname"
              :value="surname"
              :input-rules="[inputRules.required, inputRules.name, inputRules.length]"
              hide-details="auto"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Firstname"
              :value="firstname"
              v-model="firstname"
              :input-rules="[inputRules.required, inputRules.name, inputRules.length]"
              hide-details="auto"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
      </v-layout>

      <v-layout row wrap col-12>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Username"
              v-model="username"
              :value="username"
              :input-rules="[inputRules.required, inputRules.length]"
              hide-details="auto"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Email address"
              :value="email"
              v-model="email"
              hide-details="auto"
              :input-rules="[inputRules.required, inputRules.email]"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex pl-4 pr-4 md12>
          <v-select
              :items="items"
              label="Realm"
              v-model="realm"
              outlined
              color="grey lighten-1"
              hide-details="auto"
              aria-required="true"
          >
          </v-select>
        </v-flex>
      </v-layout>
      <v-card-title>
        Password
      </v-card-title>
      <v-layout row wrap col-12 >
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              :append-icon="show ? icon[0] : icon[1]"
              label="Password"
              :value="password"
              v-model="password"
              :type="show ? 'text' : 'password'"
              :input-rules="[inputRules.required, inputRules.password]"
              hide-details="auto"
              aria-required="true"
          ></my-input-add-user>
        </v-flex>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              :append-icon="show ? icon[0] : icon[1]"
              label="Confirm Password"
              v-model="confirmPassword"
              :value="confirmPassword"
              :type="show ? 'text' : 'password'"
              :input-rules="[inputRules.required, inputRules.confirmPassword]"
              hide-details="auto"
              aria-required="true"
          ></my-input-add-user>
        </v-flex>
      </v-layout>
    <div class="buttons  relative text-center mt-5">
      <router-link to="/">
        <v-btn
            dark
            small
            width="120"
            color="grey"
            class="mr-5 form__btnLeft"
        >
          Cansel
        </v-btn>
      </router-link>
      <v-btn
          class="ml-5 form__btnRight"
          dark
          small
          width="120"
          type="submit"
          color="cyan darken-1"
          @click="error = !error"
      >
        Save
      </v-btn>
      <MyTooltip v-if="error">{{ message }}</MyTooltip>
    </div>
  </v-form>
  <MyLoader v-else/>
</template>

<script>
import MyInputAddUser from "@/UI/MyInputAddUser";
import {mapState} from "vuex";
import MyLoader from "@/UI/MyLoader";
import MyTooltip from "@/UI/MyTooltip";

export default {
  name: 'form-create-user',
  components: {
    MyLoader,
    MyInputAddUser,
    MyTooltip
  },
  prop: {

  },
  data: () => ({
    component: '',
    value: '',
    surname: '',
    firstname: '',
    username: '',
    email: '',
    date: '',
    realm: null,
    password: '',
    confirmPassword: '',
    items: [
      'LBBW Immo'
    ],
    show: false,
    error: false,
    icon: ['mdi-eye', 'mdi-eye-off'],
    message: '',
    prompt: false,
  }),
  methods: {
    async handlerSubmit() {
      if (this.$refs.form.validate()) {
        try {
          const formData = {
            surname: this.surname,
            firstname: this.firstname,
            username: this.username,
            email: this.email,
            realm: this.realm,
            password: this.password,
            date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          }
          // await this.$store.dispatch('userModule/createUser', formData);

          this.message = 'The user is registered. Add him roles'
          this.tooltipShow()
          this.routApplications()

        } catch (e) {
          this.message = 'This email is already registered'
          this.tooltipShow()
        }
      }
    },
    tooltipShow() {
      this.prompt = true
      setTimeout(() => {
        this.error = false
      }, 2500)
    },
    routApplications() {
      setTimeout(() => {
        this.$router.push('/checkbox-create-user')
      }, 3000)
    },
  },
  computed: {
    ...mapState({
      isLoading: state => state.usersModule.isLoading,
      inputRules: state => state.formModule.inputRules
    }),
  }

}
</script>

<style scoped>

</style>