<template>
  <v-layout row class="height white overflow-x-auto usersList relative">
    <v-flex>
        <MainItemList
            v-for="user in users"
            :user="user"
            :key="user.id"
        />
    </v-flex>
<!--    <router-link to="/users-list">-->
<!--      <v-btn-->
<!--          class="userList__btn"-->
<!--          fab-->
<!--          dark-->
<!--          small-->
<!--          color="white"-->
<!--      >-->
<!--        <v-icon color="cyan" class="text-h5">-->
<!--          mdi-chevron-right-->
<!--        </v-icon>-->
<!--      </v-btn>-->
<!--    </router-link>-->
  </v-layout>
</template>

<script>
import {mapState} from "vuex";
import MainItemList from "@/components/main/MainItemList";

export default {
  components: {MainItemList},
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
.userList__btn {
  position: absolute;
  top: 40px;
  right: -15px;
  z-index: 10;
}
</style>