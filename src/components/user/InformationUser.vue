<template>
  <section class="information">
    <v-card  class="pa-10 information__content" v-if="this.$route.params.id === user.id">
      <v-layout col-12>
        <v-row>
          <v-flex md1>
            <MyAvatar :user="user" size="80" class="pa-10 mb-sm-3" />
          </v-flex>
          <v-flex md8 align-self-center>
            <v-card-text class="grey--text pa-0">Name</v-card-text>
            <v-card-title class="text-h5 pa-0">{{ `${user.surname} ${user.firstname}` }}</v-card-title>
          </v-flex>
          <v-flex md2>
            <v-layout col-12 class="pa-0">
              <v-flex md11 class="text-right">
                <v-chip color="cyan" small text-color="white">
                  <v-icon  color="white" class="mr-2">{{ icon }}</v-icon>
                  {{ text }}
                </v-chip>
              </v-flex>
              <v-flex  md1>
                <MyDropdownButtons>
                  <my-button-edit/>
                  <my-button-reset/>
                  <my-button-roles/>
                  <my-button-disable @click.native="changeStatus"/>
                  <my-button-delete @click.native="removeUser"/>
                </MyDropdownButtons>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-card-title class="mt-11">Information</v-card-title>
          <v-spacer class="border spacer mt-5"></v-spacer>
          <v-layout col-12 class="mt-10">
            <v-row>
              <v-flex md4>
                <v-card-text class="grey--text pa-0">Username</v-card-text>
                <v-card-title class="pa-0">{{ user.username }}</v-card-title>
              </v-flex>
              <v-flex md4>
                <v-card-text class="grey--text pa-0">Email</v-card-text>
                <v-card-title class="pa-0">{{ user.email }}</v-card-title>
              </v-flex>
              <v-flex md4>
                <v-card-text class="grey--text pa-0">Create on</v-card-text>
                <v-card-title class="pa-0">{{ user.date }}</v-card-title>
              </v-flex>
            </v-row>
          </v-layout>
        </v-row>
      </v-layout>
    </v-card>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MyAvatar from "@/UI/MyAvatar";
import MyDropdownButtons from "@/UI/MyDropdownButtons";
import MyButtonReset from "@/UI/MyButtonReset";
import MyButtonEdit from "@/UI/MyButtonEdit";
import MyButtonRoles from "@/UI/MyButtonRoles";
import MyButtonDisable from "@/UI/MyButtonDisable";
import MyButtonDelete from "@/UI/MyButtonDelete";

export default {
  name: 'information-user',
  components: {
    MyAvatar,
    MyDropdownButtons,
    MyButtonReset,
    MyButtonEdit,
    MyButtonRoles,
    MyButtonDisable,
    MyButtonDelete,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    icon: 'mdi-check',
    text: 'is active',
    status: 'active'
  }),
  methods: {
    ...mapActions({
    }),
    changeStatus() {
      this.status = 'inactive'
    },
    removeUser(user) {
      this.$emit('remove', user)
    },
  },
  computed: {
    ...mapGetters({

    })
  }
}
</script>

<style scoped>
.information__content {
  min-height: 100%;
}
</style>