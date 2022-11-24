<template>
  <div>
    <div class="usersListItem border">
      <v-card flat class="pb-3 pt-3">
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
                      <span
                          v-for="role in roles"
                          :key="role.id"
                      >
                        <v-chip v-if="role.user === user.id">
                          {{ role.name }}
                        </v-chip>
                      </span>

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
            <MyDropdownButtons/>
          </v-flex>

        </v-layout>

      </v-card>
    </div>
  </div>
</template>

<script>
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import {mapState} from "vuex";
export default {
  components: {MyDropdownButtons},
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
  computed: {
    ...mapState({
      applications: state => state.formModule.applications,
      roles: state => state.formModule.roles
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
.usersList__drop {
  position: absolute;
  right: 40px;
  background: #fff;
  border: 1px solid #d5d5d5;
  box-shadow: 11px 9px 25px 0 rgba(0,0,0,0.75);
  padding: 20px;
  max-width: 300px;
  height: auto;
  z-index: 1;
}
</style>