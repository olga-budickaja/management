<template>
  <div class="blue-grey">
    <v-icon v-on:click="show = !show" class="ml-16 usersList__btnDrop">mdi-dots-vertical</v-icon>
    <transition name="fade">
      <v-list v-if="show" :offset-x="offset" class="usersList__drop">
        <v-list-item-title>
          <v-list-item-group
              v-model="selectedItem"
              color="cyan"
          >
            <div>Hello</div>
<!--            <MyButtonDrop-->
<!--                v-for="btn in btnDrops"-->
<!--                :btn="btn"-->
<!--                :key="btn.id"-->
<!--            />-->
          </v-list-item-group>

        </v-list-item-title>
      </v-list>
    </transition>
  </div>
</template>

<script>
import MyButtonDrop from "@/UI/MyButtonDrop";
import {mapState} from "vuex";

export default {
  name: 'my-dropdown-buttons',
  components: {MyButtonDrop},
  prop: {
    btnDrops: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    selectedItem: 0,
    show: false,
    offset: true
  }),
  methods: {
  },
  computed: {
    ...mapState({
      btnDrops: state => state.ButtonsModule.btnDrops
    }),
  }
}
</script>

<style scoped>

</style>