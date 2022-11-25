<template>
  <v-app class="main">
    <Navbar/>
    <div class="displayFlex">
      <Sidebar/>
      <v-responsive>
        <Toolbar/>
        <section class="content height">
          <v-layout col-12 row class="grey lighten-4">
            <v-flex md3 class="relative">
              <MainUsersList class="height" :users="users"/>
              <router-link to="/users-list">
                <v-btn
                    class="userList__btn"
                    fab
                    dark
                    small
                    color="white"
                >
                  <v-icon color="cyan" class="text-h5">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </router-link>
            </v-flex>
            <v-flex md9>
              <router-view/>
            </v-flex>
          </v-layout>
        </section>
      </v-responsive>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import Toolbar from "@/components/bars/Toolbar";
import MainUsersList from "@/components/main/MainUsersList";
import {mapState} from "vuex";

export default {
  name: 'main-layout',
  components: {
    MainUsersList,
    Navbar,
    Sidebar,
    Toolbar
  },
  computed: {
    ...mapState({
      users: state => state.usersModule.users
    })
  }
}
</script>

<style scoped>
.userList__btn {
  position: absolute;
  top: 30px;
  right: -20px;
  z-index: 10;
}
</style>