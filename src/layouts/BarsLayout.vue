<template>
  <v-app>
    <Navbar/>
    <div class="d-flex">
      <Sidebar/>
      <v-responsive>
        <router-view :users="sortedAndSearchUser"/>
      </v-responsive>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import {mapGetters, mapState} from "vuex";

export default {
  name: 'bars-layout',
  components: {
    Navbar,
    Sidebar
  },
  methods: {
  },
  computed: {
    ...mapState({
      selectedNameEmail: 'selectedNameEmail'
    }),
    ...mapGetters({
      sortedUser: 'sortedUsers',
      sortedAndSearchUser: 'sortedAndSearchedUsers'
    }),
    sort() {
      return this.sortedAndSearchedUsers
    }
  },
}
</script>

<style scoped>

</style>