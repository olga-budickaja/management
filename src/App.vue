<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view/>
      </component>
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import FormLayout from "@/layouts/FormLayout";
import BarsLayout from "@/layouts/BarsLayout";

export default {
  name: 'App',
  components: {
    MainLayout,
    FormLayout,
    BarsLayout
  },
  data: () => ({
    //
  }),
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
};
</script>

<style>
@import "assets/index.css";
</style>
