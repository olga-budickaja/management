<template>
  <my-input
      :value="surname"
      :input.sync="$store.state.inputsModule.searchQuery"
      @update:input="setSearchQuery"
      label="Search..."
      class="mt-5"
  />
</template>

<script>
import MyInput from "@/UI/MyInput";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'search-user',
  components: {MyInput},
  data: () => ({
    surname: '',
  }),
  methods: {
    ...mapActions({
      searchedQuery: 'searchedQuery'
    }),
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
      setUsers: 'setUsers'
    }),
  },
  computed: {
    ...mapState({
      // searchQuery: state => state.inputsModule.searchQuery,
    }),
    ...mapGetters({
      sortedAndSearchedUsers: 'sortedAndSearchedUsers',
      sortedUsers: 'sortedUsers',
      searchQuery: 'searchQuery'
    })
  }
}
</script>

<style scoped>

</style>