<template>
  <my-input
      :v-model="surname"
      :value="surname"
      :input.sync="searchQuery"
      @update:input="setSearchQuery"
      label="Search..."
      class="mt-5"
  />
</template>

<script>
import MyInput from "@/UI/MyInput";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'search-user',
  components: {MyInput},
  data: () => ({
    surname: '',
  }),
  methods: {
    ...mapMutations({
      setSearchQuery: 'inputsModule/setSearchQuery',
      setUsers: 'usersModule/setUsers'
    }),
  },
  computed: {
    ...mapState({
      searchQuery: state => state.inputsModule.searchQuery,
    }),
    ...mapGetters({
      sortedAndSearchedUsers: 'inputsModule/sortedAndSearchedUsers',
      sortedUsers: 'inputsModule/sortedUsers'
    })
  }
}
</script>

<style scoped>

</style>