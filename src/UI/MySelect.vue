<template>
  <div
      class="mySelect"
      @change="modelValue"
      @click="optionsVisible = !optionsVisible"
  >
    <div class="mySelectWrapper">
      <div ref="titleSelected" class="titleSelected">
                  <span>
            <v-icon
                class="text-h5 iconSelect"
                left
            >
              {{ iconDefault }}
            </v-icon>
          </span>
        {{ selectDefault }}
      </div>
      <slot></slot>
      <div
          class="options"
          v-if="optionsVisible"
      >
        <div
            class="option"
            v-for="option in options"
            :key="option.value"
            @click="changeOption(option)"
        >
          <span>
            <v-icon
                class="text-h5 iconSelect"
                left
            >
              {{ option.icon }}
            </v-icon>
          </span>
          {{ option.name }}
        </div>
      </div>
    </div>
    <v-icon color="grey" right class="mySelect__icon">mdi-menu-down</v-icon>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      type: Array,
      default: Array
    },
    options: {
      type: Array,
      default: () => []
    },
    selectDefault: {
      type: String,
      default: ''
    },
    iconDefault: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      optionsVisible: false,
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:selected', event)
      this.$refs.titleSelected.remove()
    },
  },
}
</script>

<style scoped>
  .mySelect {
    position: relative;
    border: 1px solid #9e9e9e;
    width: 100%;
    padding: 14px 20px;
    border-radius: 3px;
    cursor: pointer;
  }
  .mySelect:hover,
  .mySelect:active {
    border: 1px solid #2196F3;
  }
  .options {
    position: absolute;
    top: 45px;
    right: 0;
    width: 100%;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 12px 12px #0000001A;
    z-index: 700;
    padding: 20px 3px 3px 3px;
  }
  .mySelect__icon {
    position: absolute;
    top: 55%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 30px;
  }
  .titleSelected {
    position: absolute;
    color: rgba(0, 0, 0, 0.6)
  }
  .option {
    margin: 0;
    padding: 15px 40px;
    transition: all .5s;
  }
  .option:hover {
    background: #E3F2FD
  }
</style>