<template>
  <div class="submitApp">
    <v-card flat ma-4>
      <v-card-title class="text-h6">Application, Systems and User Roles</v-card-title>
      <v-layout row col-12>
        <v-flex md6 sm6 xs6 class="text-left">
          <v-card-text class="text-md-body-6">Select the application, systems and User Roles for which the user should be authorized.</v-card-text>

        </v-flex>
        <v-flex md6 sm6 xs6 class="text-left">
          <v-card-text class="text-md-body-6">Select:</v-card-text>
        </v-flex>
      </v-layout>
      <v-form
          ref="formCheck"
          class="pt-5 relative"
          v-if="!isLoading"
          @submit.prevent="submitHandler"
      >
        <div id="main-check" class="checkSystems__item border text-left">
            <v-row>
              <v-col>
                <v-treeview
                    v-model="selection"
                    :items="applications"
                    selection-type="leaf"
                    selectable
                    return-object
                    open-all
                >
                  <template v-slot:prepend="item">
                    <v-avatar color="avatarIcon cyan lighten-5" size="40">
                      <v-icon color="cyan">mdi-share-variant-outline</v-icon>
                    </v-avatar>
                  </template>
                </v-treeview>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col
                  class="pa-6"
                  cols="6"
              >
                <template v-if="!selection.length">
                  No nodes selected.
                </template>
                <template v-else>
                    <div
                        v-for="node in selection"
                        :key="node.id"
                        class="text-left"
                    >
                      <div>
                        <div v-for="app in applications" :key="app.id" class="pt-1">
                          <div v-for="(child, i) in app.children" :key="i">
                            <div v-if="child?.name === node.name">
                              {{ app.name }}
                            </div>

                          </div>
                        </div>
                          <v-chip class="chipItem" small color="cyan lighten-5">{{ node.name }}</v-chip>
                      </div>
                    </div>
                </template>
              </v-col>
            </v-row>
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
import {mapActions, mapState} from "vuex";
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
    show: false,
    role: '',
    message: '',
    item: '',
    applicationName: [],
    selection: [],
  }),
  methods: {
    ...mapActions({
    }),
    async submitHandler() {
      if (!this.selection) {
        this.message = 'Choose at least one application'
        this.tooltipShow()
      } else {
        this.message = 'Data saved'
        this.tooltipShow()
        this.routUsersList()
      }
      const appData = {
        application: this.selection,
        id: Math.random()
      }
      try {
        console.log(appData)
        await this.$store.dispatch('updateApplication', appData)
        this.$emit('createApp', appData)
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
    routUsersList() {
      setTimeout(() => {
        this.$router.push('/users-list')
      }, 2300)
    },
  },
  computed: {
    ...mapState({
      applications: state => state.applicationsRoles.applications,
      roles: state => state.applicationsRoles.roles,
      isLoading: state => state.usersModule.isLoading
    }),
  },
  watch: {
  }
}
</script>

<style scoped>
.checkSystems__item {
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  overflow-x: hidden;
}
.v-treeview-node__root .avatarIcon {
  display: none;
}
.v-treeview-node__children .avatarIcon {
  display: block;
}

</style>