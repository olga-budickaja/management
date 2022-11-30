<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      class="text-right"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
          v-bind="attrs"
          v-on="on"
      >
        mdi-dots-vertical
      </v-icon>
    </template>

    <v-card class="pa-6">
      <v-list>
        <v-list-item-title>
          <v-list-item-group
              v-model="selectedItem"
              color="cyan"
          >
            <slot/>
          </v-list-item-group>
        </v-list-item-title>
      </v-list>
    </v-card>
  </v-menu>

</template>

<script>


export default {
  name: 'my-dropdown-buttons',
  data: () => ({
    selectedItem: 0,
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  methods: {
  },
}
</script>

<style scoped>

</style>