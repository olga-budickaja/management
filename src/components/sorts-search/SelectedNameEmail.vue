<template>
  <MySelect
      :selected.sync="$store.state.inputsModule.selectedNameEmail"
      :options="sortNameEmails"
      :selectDefault="selectDefault"
      :iconDefault="iconDefault"
      @change="selectedNameEmail"
  >
    <div>
      <v-icon
          class="text-h5 iconSelect"
          left
      >
        {{ selectedNameEmail.icon }}
      </v-icon>
      {{ selectedNameEmail.name }}
    </div>
  </MySelect>
</template>

<script>
import MySelect from "@/UI/MySelect";
import { mapMutations, mapState } from "vuex";

export default {
  name: 'selected-name-email',
  components: {MySelect},
  data: () => ({
    selectDefault: 'Sorts Users',
    iconDefault: 'mdi-sort'
  }),
  methods: {
    ...mapMutations({
      setSelectedNameEmail: 'inputsModule/setSelectedNameEmail',
    }),
  },
  computed: {
    ...mapState({
      selectedNameEmail: state => state.inputsModule.selectedNameEmail,
      sortNameEmails: state => state.inputsModule.sortNameEmails,
    }),
  }
}
</script>

<style scoped>

</style>