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
export default {
  name: 'sort-roles',
  components: {MySelectCheck},
}
</script>

<style scoped>

</style>