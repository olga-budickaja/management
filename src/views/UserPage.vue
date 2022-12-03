<template>
  <div class="userId">
    <v-responsive>
      <v-tabs background-color="transparent" class="user__tabs pb-0">
        <v-tab @click="view='InformationUser'" class="mr-16 pa-0">Information</v-tab>
        <v-tab @click="view='RolesUser'" class="pa-0">Userroles</v-tab>
      </v-tabs>
      <component
          :is="view"
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="userPage"
          @remove="removedUser"
          @createApp="createApp"
          @createUser="createUser"
      />
    </v-responsive>
  </div>
</template>

<script>

import InformationUser from "@/components/user/InformationUser";
import RolesUser from "@/components/user/RolesUser";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'user-page',
  components: {
    InformationUser,
    RolesUser
  },
  data() {
    return {
      view: 'InformationUser'
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      NEW_USER: 'NEW_USER',
      NEW_APPLICATION: 'NEW_APPLICATION'
    }),
    ...mapActions({
      removeUser: 'removeUser'
    }),
    createUser(user) {
      user = this.users
    },
    createApp(app) {
      app = this.updateApplication
    },
    removedUser(user) {
      this.removeUser(user)
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters({
      applicationsUser: 'applicationsUser',
      users: 'users'
    })
  },
}
</script>

<style scoped>
.userId {
  margin-left: 70px;
}
.userPage {
  margin-top: 0 !important;
}
</style>