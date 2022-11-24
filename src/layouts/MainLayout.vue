<template>
  <v-app class="main">
    <Navbar/>
    <div class="displayFlex">
      <Sidebar/>
      <v-responsive>
        <Toolbar/>
        <section class="content height">
          <v-layout col-12 row class="grey lighten-4">
            <v-flex md3>
              <MainUsersList class="height"/>
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

export default {
  name: 'main-layout',
  components: {
    MainUsersList,
    Navbar,
    Sidebar,
    Toolbar
  }
}
</script>

<style scoped>

</style>