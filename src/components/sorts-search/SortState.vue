<template>
  <MySelect
      :selected.sync="$store.state.inputsModule.selectedSortState"
      :options="sortSortsState"
      :value="value"
      :selectDefault="selectDefault"
      :iconDefault="iconDefault"
      @change="selectedSortState"
  >
    <div>
      <v-icon
          class="text-h5 iconSelect"
          left
      >
        {{ selectedSortState.icon }}

      </v-icon>
      {{ selectedSortState.name }}
    </div>
  </MySelect>
</template>

<script>
import MySelect from "@/UI/MySelect";
import { mapMutations, mapState } from "vuex";

export default {
  name: 'sorts-state',
  components: {MySelect},
  props: {
    value: String
  },
  data: () => ({
    selectDefault: 'State',
    iconDefault: 'mdi-align-vertical-distribute'
  }),
  methods: {
    ...mapMutations({
      setSortsSortsState: 'inputsModule/setSortsSortsState'
    }),
  },
  computed: {
    ...mapState({
      selectedSortState: state => state.inputsModule.selectedSortState,
      sortSortsState: state => state.inputsModule.sortsSortsState
    }),
  }
}
</script>

<style scoped>

</style>