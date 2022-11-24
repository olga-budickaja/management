<template>
  <div>
    <v-icon v-on:click="show = !show" class="ml-16 usersList__btnDrop">mdi-dots-vertical</v-icon>
    <transition name="fade">
      <v-list v-if="show" :offset-x="offset" class="usersList__drop">
        <v-list-item-title>
          <v-list-item-group
              v-model="selectedItem"
              color="cyan"
          >
            <MyButtonDrop
                v-for="btn in btnDrops"
                :btn="btn"
                :key="btn.name"
            />
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
      btnDrops: state => state.buttonsModule.btnDrops
    }),
  }
}
</script>

<style scoped>
.usersList__drop {
  position: absolute;
  right: 40px;
  background: #fff;
  border: 1px solid #d5d5d5;
  box-shadow: 11px 9px 25px 0 rgba(0,0,0,0.75);
  padding: 20px;
  max-width: 300px;
  height: auto;
  z-index: 1;
}
</style>