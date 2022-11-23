import Vue from 'vue'
import Vuex from 'vuex'
import {sidebarModule} from "@/store/sidebar";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    itemsSideBar: [
      { title: 'Users', icon: 'mdi-account-lock-open-outline' },
      { title: 'Active', icon: 'mdi-lock-open-variant-outline' },
      { title: 'Rollen', icon: 'mdi-share-variant-outline' },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sidebarModule
  }
})
