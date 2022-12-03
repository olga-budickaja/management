<template>
  <v-avatar
      color="cyan lighten-5"
      class="mr-3"
      @click="$router.push(`/users/${user.id}`)"
  >
      <span class="blue--text text-h5 text-uppercase font-weight-bold">
        {{ user.firstname[0] + user.lastname[0] }}
      </span>
  </v-avatar>
</template>

<script>
export default {
  name: 'my-avatar',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>