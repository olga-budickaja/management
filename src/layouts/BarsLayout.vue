<template>
  <v-app>
    <Navbar/>
    <div class="displayFlex">
      <Sidebar/>
      <v-responsive>
        <router-view/>
      </v-responsive>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";

export default {
  name: 'bars-layout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>

</style>