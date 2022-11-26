<template>
  <div>
    <div v-if="users.length > 0">
      <div class="usersList__title border mt-6">
        <v-layout grey--text row class="pb-2">
          <v-flex md11>
            <v-layout col12 row>
              <v-flex md4 sm8 xs12>
                <v-layout>
                  <v-flex md2></v-flex>
                  <v-flex md10>
                    <v-layout col12 row>
                      <v-flex xl6 md4 class="align-self-center">Name</v-flex>
                      <v-flex xl6 md9 class="align-self-center">Email</v-flex>
                    </v-layout>
                  </v-flex>

                </v-layout>
              </v-flex>
              <v-flex md6 sm3 xs12>
                <v-layout col12 row wrap>
                  <v-flex md11 class="align-self-center">Roles</v-flex>
                  <v-flex md1 class="align-self-center">Created</v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md1></v-flex>
        </v-layout>
      </div>
      <transition-group name="user-list" tag="div" class="transition">
        <UserListItem
            v-for="user in users"
            :user="user"
            :key="user.id"
            @removeUser="removedUser(user)"
        />
      </transition-group>
    </div>
    <v-card-title v-else class="error--text">User list is empty</v-card-title>
  </div>
</template>

<script>
import UserListItem from "@/components/users-list/UserListItem";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  components: {
    UserListItem
  },
  methods: {
    ...mapActions({
      createUser: 'createUser',
      createApp: 'updateApplication',
      removeUser: 'removeUser',
    }),
    ...mapMutations({
      NEW_USER: 'NEW_USER',
      setUsers: 'setUsers',
      NEW_APPLICATION: 'NEW_APPLICATION',
      setApplicationsUser: 'setApplicationsUser'
    }),
    removedUser(user) {
      this.removeUser(user)
    },
  },
  computed: {
    ...mapState({
      users: state => state.usersModule.users,
    }),
  },
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active, .user-list-leave-active {
  transition: all 0.2s ease;
}
.user-list-enter, .user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>