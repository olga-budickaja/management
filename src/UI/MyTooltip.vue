<template>
  <transition name="my-tooltip">
    <v-card class="absolute pa-2 white--text grey darken-3 opacity top pa-0">
      <slot class=""/>
    </v-card>
  </transition>
</template>

<script>
export default {
  name: 'my-tooltip',
}
</script>

<style scoped>
.my-tooltip-enter-active {
  transition: all 1s ease;
}
.my-tooltip-leave-active {
  transition: all 0.1s  ease;
}
.my-tooltip-enter, .my-tooltip-leave-to
  /* .my-tooltip-leave-active до версии 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>