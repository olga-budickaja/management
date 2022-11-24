<template>
  <MySelectCheck
      :selected.sync="$store.state.inputsModule.selectedChecks"
      :items="sortedChecks"
      :label="selectedChecks"
      :selectDefault="selectDefault"
      :iconDefault="iconDefault"
      class="mt-5"
  />
</template>

<script>
import MySelectCheck from "@/UI/MySelectCheck";
import { mapMutations, mapState } from "vuex";

export default {
  name: 'sort-roles',
  components: {MySelectCheck},
  data: () => ({
    selectDefault: 'Roles',
    iconDefault: 'mdi-mdi-account-badge-outline'
  }),
  methods: {
    ...mapMutations({
      setSelectedChecks: 'inputsModule/setSelectedChecks',
    })
  },
  computed: {
    ...mapState({
      selectedChecks: state => state.inputsModule.selectedChecks,
      sortedChecks: state => state.inputsModule.sortedChecks,
    })
  }
}
</script>

<style scoped>

</style>