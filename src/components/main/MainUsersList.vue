<template>
  <v-layout row class="height hidden-xs-only white overflow-x-auto usersList relative">
    <v-flex>
      <v-card class="border relative pa-6 pr-16" flat>
        <SearchUsers />
      </v-card>
      <MainItemList
          v-for="user in users"
          :user="user"
          :key="user.id"
          @removeUser="removedUser(user)"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import MainItemList from "@/components/main/MainItemList";
import SearchUsers from "@/components/sorts-search/SearchUsers";
import {mapActions} from "vuex";

export default {
  components: {
    MainItemList,
    SearchUsers
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      removeUser: 'removeUser',
    }),
    removedUser(user) {
      this.removeUser(user)
    },
  }
  // computed: {
  //   ...mapState({
  //     users: state => state.usersModule.users,
  //   }),
  // }
}
</script>

<style scoped>

</style>