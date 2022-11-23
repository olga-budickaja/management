<template>
  <div>
    <v-card flat class="border pointer">
      <v-layout row>
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
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>