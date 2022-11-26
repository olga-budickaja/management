<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view
            @create="createUser"
            @createApp="updateApplication"
        />
      </component>
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import FormLayout from "@/layouts/FormLayout";
import BarsLayout from "@/layouts/BarsLayout";
import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    MainLayout,
    FormLayout,
    BarsLayout
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions({
      createUser: 'createUser',
      updateApplication: 'updateApplication',
    }),
    createUser(user) {
      user = this.users
    },
    updateApplication(app) {
      app = this.applicationsUser
    }
  },
  computed: {
    ...mapState({
      applicationsUser: state => state.applicationsRoles.applicationsUser
    }),
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
};
</script>

<style>
@import "assets/index.css";
</style>
