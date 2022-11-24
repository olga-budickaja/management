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
      />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from "vuex";
import MainItemList from "@/components/main/MainItemList";
import SearchUsers from "@/components/sorts-search/SearchUsers";

export default {
  components: {
    MainItemList,
    SearchUsers
  },
  prop: {
    users: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      users: state => state.usersModule.users,
    }),
  }
}
</script>

<style scoped>

</style>