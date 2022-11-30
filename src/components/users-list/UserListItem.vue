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
                    <MyAvatar :user="user" size="48" />
                    <div class="d-flex align-self-center" :class="`${status}`">
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
                        :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
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
                      <ApplicationsUserChip
                          v-for="app in applicationsUser"
                          :key="app.id"
                          :app="app"
                          :userId="user.id"
                          class="mt-sm-3 mb-sm-3"
                      />
                  </v-flex>
                  <v-flex md1 class="d-flex">
                    <div class="mr-5">{{ user.date }}</div>
                    <div>{{ user.time }}</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md1 xs1 align-self-center text-right>
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
  </div>
</template>

<script>
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import {mapActions, mapGetters, mapState} from "vuex";
import MyButtonReset from "@/UI/MyButtonReset";
import MyButtonEdit from "@/UI/MyButtonEdit";
import MyButtonRoles from "@/UI/MyButtonRoles";
import MyButtonDisable from "@/UI/MyButtonDisable";
import MyButtonDelete from "@/UI/MyButtonDelete";
import ApplicationsUserChip from "@/components/ApplicationsUserChip";
import MyAvatar from "@/UI/MyAvatar";
export default {
  components: {
    ApplicationsUserChip,
    MyDropdownButtons,
    MyButtonReset,
    MyButtonEdit,
    MyButtonRoles,
    MyButtonDisable,
    MyButtonDelete,
    MyAvatar
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
      offset: true,
      status: 'active'
    }
  },
  methods: {
    ...mapActions({
      // removeUser: 'removeUser'
    }),
    changeStatus() {
      this.status = 'inactive'
    },
    removeUser(user) {
      this.$emit('removeUser', user)
    }
  },
  computed: {
    ...mapState({
      // applicationsUser: state => state.applicationsRoles.applicationsUser
    }),
    ...mapGetters({
      applicationUser: 'applicationUser',
      applicationsUser: 'applicationsUser'
    })
  },
  watch: {
    applicationsUser(value) {
      console.log(value)
    }
  }
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