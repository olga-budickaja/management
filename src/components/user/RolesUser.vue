<template>
  <section class="roles">
    <v-card  class="pa-10" v-if="this.$route.params.id === user.id">
      <v-card flat class="border  pb-5 pl-0 pr-0 ma-0">
        <v-layout class="pl-0 pr-0">
          <v-row class="pl-0 pr-0">
            <v-flex md4 class="grey--text pa-0">Name</v-flex>
            <v-flex md8 class="grey--text pa-0">System & Applications</v-flex>
          </v-row>
        </v-layout>
      </v-card>
      <v-card
          flat
          border
          v-for="app in applicationsUser"
          :key="app.id"
      >
        <v-layout class="mt-10" v-if="app.user === user.id">
          <v-row class="border pa-7 pt-4">
            <v-flex md4>
              <v-layout>
                <v-row>
                  <v-flex md3>
                    <v-avatar align-self-center color="cyan lighten-5" size="48">
                      <v-icon color="cyan">mdi-share-variant-outline</v-icon>
                    </v-avatar>
                  </v-flex>
                  <v-flex align-self-center md9>
                    <v-card-text class="pa-0 text-h5">{{ app.roles}}</v-card-text>
                  </v-flex>
                </v-row>
              </v-layout>
            </v-flex>
            <v-flex md7>
              <v-card-text  align-self-center class="pa-0">{{ app.application }}</v-card-text>
            </v-flex>
            <v-flex md1 class="text-right">
                <MyDropdownButtons>
                  <v-icon class="mr-8">mdi-account-minus-outline</v-icon>
                  <span class="black--text">Revoke user role</span>
                </MyDropdownButtons>
            </v-flex>
          </v-row>
        </v-layout>
      </v-card>
    </v-card>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import MyDropdownButtons from "@/UI/MyDropdownButtons";

export default {
  name: 'role-user',
  components: {MyDropdownButtons},
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      applicationsUser: 'applicationsUser'
    })
  }
}
</script>

<style scoped>

</style>