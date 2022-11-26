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

      <SelectedSortsSelected class="pt-5"/>
      <UsersList
          :users="users"
          v-if="!isLoading"
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
import {mapMutations, mapState} from "vuex";

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
      setSelectedNameEmail: 'inputsModule/setSelectedNameEmail',
      setUser: 'setUsers',
      NEW_USER: 'NEW_USER',
      setApplicationUser: 'setApplicationUser',
      NEW_APPLICATION: 'NEW_APPLICATION',
    }),
    // ...mapActions({
    //   createUser: 'usersModule/createUser'
    // }),
  },
  computed: {
    ...mapState({
      // searchQuery: state => state.userModule.searchQuery,
      isLoading: state => state.usersModule.isLoading,
      selectedNameEmail: state => state.inputsModule.selectedNameEmail,
      users: state => state.usersModule.users,
      applicationsUser: state => state.applicationsRoles.applicationsUser
    }),
    // ...mapGetters({
    //   sortedAndSearchedUsers: 'inputsModule/sortedAndSearchedUsers',
    // }),
  },
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