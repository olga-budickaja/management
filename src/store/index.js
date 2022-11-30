import Vue from 'vue'
import Vuex from 'vuex'
import {sidebarModule} from "@/store/sidebar";
import {usersModule} from "@/store/users";
import {formModule} from "@/store/forms";
import {inputsModule} from "@/store/inputs";
import {applicationsRoles} from "@/store/applications-roles";
import {authModule} from "@/store/auth";

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
    formModule,
    inputsModule,
    applicationsRoles,
    authModule
  }
})
