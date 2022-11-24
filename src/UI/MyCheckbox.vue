<template>
  <v-layout row col-12>
    <v-flex sm6 xs6 class="checked pl-lg-4 pl-sm-0 mr-lg-6 mr-sm-0 ml-lg-6 ml-sm-0">
      <v-card flat>
        <v-checkbox
            v-model="checkModel"
            :label="value"
            :value="value"
            color="cyan"
            class="mt-1 pt-0"
            @change="updateCheck"
            @click="check"
        >
        </v-checkbox >
        <v-card
            v-for="item in roles"
            :key="item.value"
            flat
            class="pl-lg-8 pl-sm-0"
        >
          <v-checkbox
              v-if="value === item.parent"
              v-model="checkItem"
              :value="item.value"
              :label="item.value"
              class="mt-1 pt-0"
              color="cyan"
              @change="itemsCheck"
              @click="check($event)"
          >
            <template v-slot:label>
              <div class="d-flex align-center">
                <v-avatar color="cyan lighten-5" size="40">
                  <v-icon color="cyan">mdi-share-variant-outline</v-icon>
                </v-avatar>
                <v-card-text class="text-bold">{{ item.value }}</v-card-text>
              </div>
            </template>
          </v-checkbox>
        </v-card>
      </v-card>
    </v-flex>

    <v-flex mr-6 ml-6 pt-0 pb-0 sm6 xs6 class="text-left pl-4">
      <v-card flat>
        {{ checkModelString }}
        <div v-if="checkItem">
          <div v-for="role in checkItem" :key="role">
            <v-chip small color="cyan lighten-5 mt-2 mr-3">{{ role }}</v-chip>
          </div>
        </div>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: 'my-checkbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    value: String,
  },
  data() {
    return {
      show: false,
      checkModel: [],
      checkItem: [],
    }
  },
  methods: {
    updateCheck(event) {
      this.$emit('update:checked', event)
    },
    itemsCheck(event) {
      this.$emit('update:itemChecked', event)
    },
    check(event) {
      this.$emit('update:click', event)
    },
  },
  computed: {
    ...mapState({
      roles: state => state.formModule.roles
    }),
    ...mapGetters({
    }),
    checkModelString() {
      return this.checkModel.toString()
    }
  },

}
</script>

<style scoped>
.checked {
  border-right: 1px solid #9a9a9a;
}
</style>