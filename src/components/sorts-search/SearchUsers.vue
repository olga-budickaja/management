<template>
  <my-input
      :input.sync="searchQuery"
      @update:input="setSearchQuery"
      label="Search..."
      class="mt-5"
  />
</template>

<script>
import MyInput from "@/UI/MyInput";
import { mapMutations, mapState } from "vuex";

export default {
  name: 'search-user',
  components: {MyInput},
  methods: {
    ...mapMutations({
      setSearchQuery: 'inputsModule/setSearchQuery',
    }),
  },
  computed: {
    ...mapState({
      searchQuery: state => state.inputsModule.searchQuery,
    })
  }
}
</script>

<style scoped>

</style>