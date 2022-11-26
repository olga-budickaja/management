<template>
  <div class="border pr-3 pl-3">
    <v-card flat class="pointer">
      <v-layout row>
        <v-flex xl2 md3 sm2 class="d-flex align-self-center">
          <v-avatar
              color="cyan lighten-5"
              size="48"
              class="mr-3"
              @click="$router.push(`/users/${user.id}`)"
          >
                <span class="blue--text text-h5 text-uppercase font-weight-bold">
                  {{ user.surname[0] + user.firstname[0] }}
                </span>
          </v-avatar>
          <div class="d-flex align-self-center" :class="`${user.status}`">
            <v-icon
                small
                class="mr-3 icon-color"
            >
              mdi-circle
            </v-icon>
          </div>
        </v-flex>
        <v-flex xl7 md6 sm6 class="align-self-center pa-2">
          <v-card-title class="text-h6 pa-0 align-self-center text-left">
            {{ `${user.surname}, ${user.firstname}` }}
          </v-card-title>
          <span
              v-for="app in applicationsUser"
              :key="app.id"
              class="grey--text"
          >
            <template v-if="app.user === user.id">
              {{ app.roles }}
            </template>
          </span>
        </v-flex>

        <v-flex xl3 md3 sm3 class="align-self-center">
          <MyDropdownButtons>
            <my-button-edit/>
            <my-button-reset/>
            <my-button-roles/>
            <my-button-disable/>
            <my-button-delete @click.native="removeUser"/>
          </MyDropdownButtons>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>

import {mapState} from "vuex";
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import MyButtonReset from "@/UI/MyButtonReset";
import MyButtonEdit from "@/UI/MyButtonEdit";
import MyButtonRoles from "@/UI/MyButtonRoles";
import MyButtonDisable from "@/UI/MyButtonDisable";
import MyButtonDelete from "@/UI/MyButtonDelete";

export default {
  components: {
    MyDropdownButtons,
    MyButtonReset,
    MyButtonEdit,
    MyButtonRoles,
    MyButtonDisable,
    MyButtonDelete
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
    offset: true,
    condition: false
  }),
  methods: {
    removeUser() {
      this.$emit('removeUser')
    },
  },
  computed: {
    ...mapState({
      applicationsUser: state => state.applicationsRoles.applicationsUser
    }),
  },
}
</script>

<style scoped>

</style>