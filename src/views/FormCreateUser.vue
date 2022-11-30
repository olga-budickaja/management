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
              v-model="user.surname"
              :value="user.surname"
              :input-rules="[inputRules.required, inputRules.name, inputRules.length]"
              hide-details="auto"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Firstname"
              :value="user.firstname"
              v-model="user.firstname"
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
              v-model="user.username"
              :value="user.username"
              :input-rules="[inputRules.required, inputRules.length]"
              hide-details="auto"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
        <v-flex md6 sm12 pl-4 pr-4 xs12>
          <my-input-add-user
              label="Email address"
              :value="user.email"
              v-model="user.email"
              hide-details="auto"
              :input-rules="[inputRules.required, inputRules.email]"
              aria-required="true"
          >
          </my-input-add-user>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex pl-7 pr-13 md12>
          <v-select
              :items="user.items"
              label="Realm"
              v-model="user.realm"
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
              :value="user.password"
              v-model="user.password"
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
              v-model="user.confirmPassword"
              :value="user.confirmPassword"
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
import {mapActions, mapMutations, mapState} from "vuex";
import MyLoader from "@/UI/MyLoader";
import MyTooltip from "@/UI/MyTooltip";

export default {
  name: 'form-create-user',
  components: {
    MyLoader,
    MyInputAddUser,
    MyTooltip
  },
  data: () => ({
    user: {
      id: '',
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
    },
    show: false,
    error: false,
    icon: ['mdi-eye', 'mdi-eye-off'],
    message: '',
    prompt: false,
  }),
  methods: {
    ...mapActions({
      createUser: 'createUser'
    }),
    ...mapMutations({
      NEW_USER: 'NEW_USER'
    }),
    async handlerSubmit() {
      if (this.$refs.form.validate()) {
        try {
          const formData = {
            surname: this.user.surname,
            firstname: this.user.firstname,
            username: this.user.username,
            email: this.user.email,
            realm: this.user.realm,
            password: this.user.password,
            date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Math.random(),
          }

          await this.$store.dispatch('createUser', formData);
          this.$emit('create', formData)
          console.log(formData)
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
      }, 2700)
    },
  },
  computed: {
    ...mapState({
      isLoading: state => state.usersModule.isLoading,
      inputRules: state => state.formModule.inputRules,
      users: state => state.usersModule.users,
    }),
  }

}
</script>

<style scoped>

</style>