<template>
  <v-row>
    <v-col>
      <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
      >
        <slot/>
      </v-treeview>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col
        class="pa-6"
        cols="6"
    >
      <template v-if="!selection.length">
        No nodes selected.
      </template>
      <template v-else>
        <div
            v-for="node in items"
            :key="node.id"
        >
          {{ node.name }}
          <div
              v-for="role in node.children"
              :key="role"
          >
            {{ role.name }}
          </div>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name:'my-checkbox-item',
  model: {
    prop: 'selection',
    event: 'change',
  },
  props: {
    selection: {
      type: Array,
      default: Array
    },
    items: {
      type: Array,
      default: () => []
    },
    // selectDefault: {
    //   type: String,
    //   default: ''
    // },
    // iconDefault: {
    //   type: String,
    //   default: ''
    // }
  },
  data: () => ({
    selectionType: 'leaf',
    selection: [],
    items: [],
  }),
  methods: {
    // updateCheck(event) {
    //   this.$emit('update:checked', event)
    // },
  },
  computed: {
    ...mapState({
      // applications: state => state.applications
    })
  }
}
</script>

<style scoped>

</style>