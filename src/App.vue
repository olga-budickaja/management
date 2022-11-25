<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view @create="createUser"/>
      </component>
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import FormLayout from "@/layouts/FormLayout";
import BarsLayout from "@/layouts/BarsLayout";
import {mapActions} from "vuex";

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
      createUser: 'usersModule/createUser'
    }),
    createUser(user) {
      user = this.users
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
};
</script>

<style>
@import "assets/index.css";
</style>
