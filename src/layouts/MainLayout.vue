<template>
  <v-app>
    <Navbar/>
    <div class="displayFlex">
      <Sidebar/>
      <v-responsive>
        <Toolbar/>
        <v-layout col-12 row>
          <v-flex md3>
<!--            <UserMainList-->
<!--                :users="sortedAndSearchedUsers"-->
<!--                v-if="!isUsersLoading"-->
<!--            />-->
          </v-flex>
          <v-flex md9>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-responsive>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import Toolbar from "@/components/bars/Toolbar";

export default {
  name: 'main-layout',
  components: {
    Navbar,
    Sidebar,
    Toolbar
  }
}
</script>

<style scoped>

</style>