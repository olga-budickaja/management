<template>
  <section class="main">
    <Navbar/>
    <div class="d-flex">
      <Sidebar/>
      <v-responsive>
        <Toolbar/>
        <div class="content">
          <v-layout col-12 row class="grey relative lighten-4">
            <v-flex md3 class="relative hidden-sm-and-down">
              <MainUsersList class="height " :users="sortedAndSearchedUsers"/>
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
            <v-flex md3 class="relative hidden-sm-and-up ml-5">
              <router-link to="/users-list">
                <v-btn rounded color="white" class="cyan--text">
                  Users List
                  <v-icon color="cyan" class="text-h5">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </router-link>

            </v-flex>
            <v-flex md9 class="components">
              <router-view @createApp="createApp" @createUser="createUser"/>
            </v-flex>
          </v-layout>
        </div>
      </v-responsive>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import Toolbar from "@/components/bars/Toolbar";
import MainUsersList from "@/components/main/MainUsersList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'main-layout',
  components: {
    MainUsersList,
    Navbar,
    Sidebar,
    Toolbar
  },
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      NEW_USER: 'NEW_USER',
      NEW_APPLICATION: 'NEW_APPLICATION'
    }),
    createUser(user) {
      user = this.users
    },
    createApp(app) {
      app = this.updateApplication
    }
  },
  computed: {
    ...mapGetters({
      users: "users",
      sortedUsers: 'sortedUsers',
      sortedAndSearchedUsers: 'sortedAndSearchedUsers'
    })
  },

}
</script>

<style scoped>
.content {
  margin-top: 1px;
  max-height: calc(100vh - 135px);
  overflow-y: auto;
}

.userList__btn {
  position: absolute;
  top: 30px;
  right: -20px;
  z-index: 10;
}

</style>