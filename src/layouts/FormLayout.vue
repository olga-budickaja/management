<template>
    <v-app>
      <Navbar/>
      <div class="displayFlex">
        <Sidebar/>
        <v-responsive>
          <ToolbarCreateUser/>
          <v-layout row col-12 class="grey lighten-4 height pt-5">
            <v-flex xs12 md7 ml-auto mr-auto>
              <v-card class="text-center userList__card">
                <v-card class="pa-4 pb-0">
                  <v-responsive>
                    <v-tabs>
                      <v-tab @click="$router.push('/form-create-user')" class="mr-16">User Information</v-tab>
                      <v-tab @click="$router.push('/checkbox-create-user')">Applications, Systems & User Roles</v-tab>
                    </v-tabs>
                  </v-responsive>
                </v-card>
                <div>
                  <v-card flat color="cyan lighten-5" class="text-center">
                    <v-responsive class="pa-4">
                      <v-avatar size="150" color="grey lighten-2" class="pa-9">
                        <v-icon size="100" color="white">
                          mdi-account
                        </v-icon>
                      </v-avatar>
                    </v-responsive>
                  </v-card>
                  <v-responsive class="pa-4 mt-5 pb-16 userList__component">
                    <router-view/>
                  </v-responsive>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-responsive>
      </div>
    </v-app>
</template>

<script>
import ToolbarCreateUser from "@/components/bars/ToolbarCreateUser";
import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import MyTooltip from "@/UI/MyTooltip";

export default {
  name: 'form-layout',
  data: () => ({
    error: false,
    message: '',
  }),
  components: {
    ToolbarCreateUser,
    Navbar,
    Sidebar,
    MyTooltip
  },
}
</script>

<style scoped>

</style>