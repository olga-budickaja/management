<template>
  <div class="border pr-8 pa-8">
    <v-card flat class="pointer">
      <v-layout row>
        <v-flex xl2 md3 sm2 class="d-flex align-self-center">
          <MyAvatar :user="user" size="48" />
          <div class="d-flex align-self-center"  :class="`${status}`">
            <v-icon
                small
                class="mr-3 icon-color"
            >
              mdi-circle
            </v-icon>
          </div>
        </v-flex>
        <v-flex xl7 md6 sm6 class="align-self-center pa-2">
          <v-card-title
              class="text-h6 pa-0 align-self-center text-left"
              @click="$router.push(`/users/${user.id}`)"
          >
            {{ `${user.surname}, ${user.firstname}` }}
          </v-card-title>

          <ApplicationsUser
              v-for="app in applicationsUser"
              :key="app.id"
              :app="app"
              :userId="user.id"
              class="grey--text"
          />
        </v-flex>

        <v-flex xl3 md3 sm3 class="align-self-center">
          <MyDropdownButtons>
            <my-button-edit/>
            <my-button-reset/>
            <my-button-roles/>
            <my-button-disable @click.native="changeStatus"/>
            <my-button-delete @click.native="removeUser"/>
          </MyDropdownButtons>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>

import {mapGetters, mapState} from "vuex";
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import MyButtonReset from "@/UI/MyButtonReset";
import MyButtonEdit from "@/UI/MyButtonEdit";
import MyButtonRoles from "@/UI/MyButtonRoles";
import MyButtonDisable from "@/UI/MyButtonDisable";
import MyButtonDelete from "@/UI/MyButtonDelete";
import ApplicationsUser from "@/components/ApplicationsUser";
import MyAvatar from "@/UI/MyAvatar";

export default {
  components: {
    MyAvatar,
    MyDropdownButtons,
    MyButtonReset,
    MyButtonEdit,
    MyButtonRoles,
    MyButtonDisable,
    MyButtonDelete,
    ApplicationsUser
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
    condition: false,
    status: 'active'
  }),
  methods: {
    removeUser() {
      this.$emit('remove')
    },
    changeStatus() {
      this.status = 'inactive'
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters({
      applicationsUser: 'applicationsUser'
    })
  },
}
</script>

<style scoped>
.active .icon-color {
  color: #00bcd4!important;
}
.inactive .icon-color {
  color: #d16a42 !important;
}
</style>