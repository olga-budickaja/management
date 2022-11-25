<template>
  <div>
    <div class="usersListItem border">
      <v-card flat class="pa-5">
        <v-layout col-12 row>
          <v-flex md11 xs11>
            <v-layout col-12 row wrap>
              <v-flex md4 sm12 xs12>
                <v-layout class="pointer">
                  <v-flex xl2 md3 sm3 class="d-flex align-self-center">
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
                  <v-flex xl10 md9 sm9 class="align-self-center">
                    <v-layout
                        wrap
                        class="usersListItemInitials__description"
                        v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
                        @click="$router.push(`/users/${user.id}`)"
                    >
                      <v-flex xl6 sm12 md12 xs12  class="text-h6 align-self-center text-left">
                        {{ `${user.surname}, ${user.firstname}` }}
                      </v-flex>
                      <v-flex xl6 sm12 md12 xs12 class="text-body-2 align-self-center text-left">{{ user.email }}</v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex md6 sm12 xs12 wrap align-self-center class="mt-xs-3 mb-xs-3">
                <v-layout wrap col-12>
                  <v-flex
                      class="d-md-flex wrap"
                      md11
                      wrap
                  >
                      <div
                          v-for="role in roles"
                          :key="role.id"
                      >
                        <v-chip v-if="role.user === user.id" class="mr-3">
                          {{ role.name }}
                        </v-chip>
                      </div>

                  </v-flex>
                  <v-flex md1 class="displayFlex">
                    <div class="mr-5">{{ user.date }}</div>
                    <div>{{ user.time }}</div>
                  </v-flex>
                </v-layout>

              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md1 xs1 align-self-center end>
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
  </div>
</template>

<script>
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import {mapState} from "vuex";
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
  data() {
    return {
      selectedItem: 0,
      show: false,
      offset: true
    }
  },
  methods: {
    removeUser() {
      this.$emit('removeUser')
    },
  },
  computed: {
    ...mapState({
      roles: state => state.usersModule.roles
    }),
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