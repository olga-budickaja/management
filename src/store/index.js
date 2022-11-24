import Vue from 'vue'
import Vuex from 'vuex'
import {sidebarModule} from "@/store/sidebar";
import {usersModule} from "@/store/users";
import {buttonsModule} from "@/store/buttons";
import {formModule} from "@/store/forms";
import {inputsModule} from "@/store/inputs";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sidebarModule,
    usersModule,
    buttonsModule,
    formModule,
    inputsModule
  }
})
