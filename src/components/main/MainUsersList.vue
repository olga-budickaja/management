<template>
  <v-layout row class="height white overflow-x-auto">
    <v-flex>
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

</style>