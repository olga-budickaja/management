<template>
  <div class="checkSystems">
    <v-card flat ma-4>
      <v-card-title class="text-h6">Application, Systems and User Roles</v-card-title>
      <v-layout row col-12 >
        <v-flex md6 sm6 xs6 class="text-left">
          <v-card-text class="text-md-body-6">Select the application, systems and User Roles for which the user should be authorized.</v-card-text>

        </v-flex>
        <v-flex md6 sm6 xs6 class="text-left">
          <v-card-text class="text-md-body-6">Select:</v-card-text>
        </v-flex>
      </v-layout>
      <v-form
          ref="formCheck"
          v-if="!isLoading"
          class="pt-5"
          @submit.prevent="submitHandler"
      >
        <div id="main-check" class="checkSystems__item">
          <MyCheckbox
              v-for="value in applications"
              :key="value.value"
              :label="value.value"
              :checked.sync="checkModels"
              :itemChecked.sync="checkItemModels"
              type="checkbox"
              :value="value.value"
              :items="value.roles"
              :click.sync="some"
          >
          </MyCheckbox>
        </div>
        <div class="pt-5 checkSystems__btns">
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
                color="cyan darken-1"
                @click="show = !show"
                type="submit"
            >
              Save
            </v-btn>
            <MyTooltip v-if="show">{{ message }}</MyTooltip>
          </div>
        </div>
      </v-form>
      <MyLoader v-else/>
    </v-card>
  </div>

</template>

<script>
import {mapState} from "vuex";
import MyCheckbox from "@/UI/MyCheckbox";
import MyLoader from "@/UI/MyLoader";
import MyTooltip from "@/UI/MyTooltip";

export default {
  name: 'checkbox-create-user',
  components: {
    MyCheckbox,
    MyLoader,
    MyTooltip
  },
  data: () => ({
    modelApp: false,
    checkedItem: false,
    label: String,
    checkModels: false,
    checkItemModels: false,
    show: false,
    message: '',
    some: ''
  }),
  methods: {
    async submitHandler() {
      if (!this.checkModels) {
        this.message = 'Choose at least one application'
        this.tooltipShow()
      } else {
        this.message = 'Data saved'
        this.tooltipShow()
      }
      const appData = {
        application: this.checkModels,
        keyRole: this.keyRole,
      }
      console.log(appData)
      try {
        // await this.$store.dispatch('updateApplication', appData)
      } catch (e) {
        console.log(e)
      }
    },
    tooltipShow() {
      this.prompt = true
      setTimeout(() => {
        this.show = false
      }, 2000)
    },
  },
  computed: {
    ...mapState({
      applications: state => state.formModule.applications,
      roles: state => state.formModule.roles,
      isLoading: state => state.usersModule.isLoading
    }),
  },
  watch: {
    some(value) {
      if (!this.checkItemModels) {
        value = null
        this.checkModels = !this.checkModels
      } else {
        this.checkModels = []
      }
      console.log(value)
    }
  }
}
</script>

<style scoped>
.checkSystems__item {
  max-height: calc(100vh - 450px);
}
.checkSystems__item {
  width: 100%;
  overflow-y: auto;
}
.checkSystems__btns {
  border-top: 1px solid #9a9a9a;
}
</style>