<!--<template>-->
<!--  <v-app>-->
<!--    <v-main>-->
<!--      <component :is="layout">-->
<!--        <router-view-->
<!--            @create="createUser"-->
<!--            @createApp="updateApplication"-->
<!--        />-->
<!--      </component>-->
<!--    </v-main>-->
<!--  </v-app>-->
<!--</template>-->

<!--<script>-->
<!--import MainLayout from "@/layouts/MainLayout";-->
<!--import FormLayout from "@/layouts/FormLayout";-->
<!--import BarsLayout from "@/layouts/BarsLayout";-->
<!--import {mapActions, mapGetters, mapState} from "vuex";-->
<!--import {updateToken} from "@/middlewares/update-token";-->
<!--import axios from "axios";-->

<!--const AUTHORIZATION_HEADER = "Authorization";-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    MainLayout,-->
<!--    FormLayout,-->
<!--    BarsLayout-->
<!--  },-->
<!--  created: function () {-->
<!--    axios.interceptors.request.use(async (config) => {-->
<!--      const token = await updateToken();-->
<!--      config.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;-->
<!--      return config;-->
<!--    });-->
<!--    axios.interceptors.response.use(-->
<!--        (response) => {-->
<!--          return response;-->
<!--        },-->
<!--        (error) => {-->
<!--          return new Promise((resolve, reject) => {-->
<!--            this.$router.push("/error");-->
<!--            reject(error);-->
<!--          });-->
<!--        }-->
<!--    );-->
<!--  },-->
<!--  data: () => ({-->
<!--    //-->
<!--  }),-->
<!--  methods: {-->
<!--    ...mapActions({-->
<!--      createUser: 'createUser',-->
<!--      updateApplication: 'updateApplication',-->
<!--    }),-->
<!--    createUser(user) {-->
<!--      user = this.users-->
<!--    },-->
<!--    updateApplication(app) {-->
<!--      app = this.applicationsUser-->
<!--    },-->

<!--  },-->
<!--  computed: {-->
<!--    ...mapState({-->

<!--    }),-->
<!--    ...mapGetters({-->
<!--      users: 'users',-->
<!--      applicationsUser: 'applicationsUser'-->
<!--    }),-->
<!--    layout() {-->
<!--      return (this.$route.meta.layout || 'main') + '-layout'-->
<!--    },-->
<!--  },-->
<!--  watch: {-->
<!--    name: 'App',-->
<!--    watch: {-->
<!--      $route() {-->
<!--        updateToken();-->
<!--      },-->
<!--    },-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--@import "assets/index.css";-->
<!--</style>-->

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