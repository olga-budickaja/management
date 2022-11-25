<template>
  <v-layout class="pb-5 pr-10 pl-5 border" row wrap >
    <v-flex md3 sm12 xs12 class="mr-5 mb-5">
      <component :is="component=`${selectedSelect.formVision || 'SelectedNameEmail'}`" class="selectComponent"/>
    </v-flex>
    <v-flex md3 sm12 class="mr-5">
      <MySelect
          :selected.sync="$store.state.inputsModule.selectedSelect"
          :options="sortSelects"
          :selectDefault="selectDefault"
          :iconDefault="iconDefault"
          class="selectComponent"
          @change="selectedSelect"
      >
        <div>
          <v-icon
              class="text-h5 iconSelect"
              left
          >
            {{ selectedSelect.icon }}
          </v-icon>
          {{ selectedSelect.name }}
        </div>
      </MySelect>
    </v-flex>
  </v-layout>
</template>

<script>
import SelectedNameEmail from "@/components/sorts-search/SelectedNameEmail";
import MySelect from "@/UI/MySelect";
import SortsState from "@/components/sorts-search/SortsState";
import SearchUsers from "@/components/sorts-search/SearchUsers";
import SortsRoles from "@/components/sorts-search/SortsRoles";
import {mapMutations, mapState} from "vuex";

export default {
  components: {
    SelectedNameEmail,
    MySelect,
    SortsState,
    SearchUsers,
    SortsRoles
  },
  data() {
    return {
      component: '',
      selectDefault: 'State',
      iconDefault: 'mdi-filter-variant'
    }
  },
  methods: {
    ...mapMutations({
      setSelectedSelect: 'inputsModule/setSelectedSelect',
    }),
  },
  computed: {
    ...mapState({
      selectedSelect: state => state.inputsModule.selectedSelect,
      sortSelects: state => state.inputsModule.sortSelects,
    })
  }
}
</script>

<style scoped>
.selectComponent {
  max-width: 100%;
}
</style>