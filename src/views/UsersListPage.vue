<template>
  <section class="userList relative">
    <Toolbar/>
    <div class="usersList__list">
      <v-btn
          class="mx-2 usersList__btn"
          fab
          dark
          small
          color="white"
          @click="$router.push('/')"
      >
        <v-icon color="cyan" class="text-h5">
          mdi-chevron-left
        </v-icon>
      </v-btn>

      <SelectedSortsSelected  class="pa-10 pl-8 pb-0"/>
      <UsersList
          :users="sortedAndSearchedUsers"
          v-if="!isLoading"
          @remove="deleteUser"
      />

      <v-progress-circular
          :size="50"
          color="cyan"
          indeterminate
          v-else
          class="progress"
      ></v-progress-circular>
    </div>

  </section>
</template>

<script>
import Toolbar from "@/components/bars/Toolbar";
import SelectedSortsSelected from "@/components/sorts-search/SelectedSortsSelected";
import UsersList from "@/components/users-list/UsersList";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'users-list-page',
  components: {
    Toolbar,
    SelectedSortsSelected,
    UsersList,
  },
  data() {
    return {
      component: 'SelectedNameEmail',
    }
  },
  methods: {
    ...mapMutations({
      setSelectedNameEmail: 'setSelectedNameEmail',
      setSearchQuery: 'setSearchQuery',
      setUser: 'setUsers',
      NEW_USER: 'NEW_USER',
      setApplicationUser: 'setApplicationUser',
      NEW_APPLICATION: 'NEW_APPLICATION',
      setStatus: 'setStatus',
      STATUS_USER: 'STATUS_USER',
    }),
    ...mapActions({
      // statusUser: 'statusUser',
      // getUsersFromApi: 'getUsersFromApi'
      removeUser: 'removeUser',
      fetchUsers: 'fetchUsers',
    }),
    // async fetchUsers() {
    //   const response = axios.get('/rdp.nks.com.ua:55002/api/users/list')
    //   console.log(response)
    // }
    deleteUser(user) {
      this.removeUser(user)
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.usersModule.isLoading,
      selectedNameEmail: state => state.inputsModule.selectedNameEmail,
      sortSelects: state => state.inputsModule.sortSelects,
      searchQuery: state => state.searchQuery,
      status: state => state.status
    }),
    ...mapGetters({
      users: 'users',
      applicationsUser: 'applicationsUser',
      sortedUsers: 'sortedUsers',
      sortedAndSearchedUsers: 'sortedAndSearchedUsers',
      token: 'token',
      // removedUser: 'removedUser'
    }),
  },
  mounted() {
   this.fetchUsers()
  }
}
</script>

<style scoped>
.progress {
  position: absolute;
  top: 600%;
  left: 50%;
  transform: translateX(-50%);
}
.userList {
  min-height: 100vh;
}
.usersList__list {
  position: relative;
  width: 97%;
  box-shadow: 0 12px 12px #0000001A;
}
.usersList__btn {
  position: absolute;
  top: 30px;
  right: -25px;
  z-index: 300;
}
</style>