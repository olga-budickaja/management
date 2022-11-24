<template>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      class="grey lighten-2 sidebar height"
      @click="!drawer"
  >
    <v-list danse>
      <v-list-item
          v-for="item in itemsSideBar"
          :key="item.title"
          @click="!drawer"
      >

        <v-list-item-icon @click="!drawer">
          <router-link to="/">
            <v-icon color="cyan" size="30">{{ item.icon }}</v-icon>
          </router-link>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="cyan--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>



      </v-list-item>
    </v-list>
    <v-btn
        icon
        class="sidebar__close"
        @click.stop="mini = !mini"
    >
      <v-icon
          size="35"
          color="cyan"
          @click="show = !show"
      >
        {{ btnText }}
      </v-icon>
    </v-btn>
  </v-navigation-drawer>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'my-sidebar',
  data() {
    return {
      drawer: true,
      mini: true,
      show: false
    }
  },
  computed: {
    ...mapState({
      itemsSideBar: state => state.sidebarModule.itemsSideBar
    }),

    btnText: function () {
      if(this.show) {
        return 'mdi-chevron-left'
      }
      return 'mdi-chevron-right'
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: relative;
}
.sidebar__close {
  position: absolute;
  bottom: 360px;
}
</style>