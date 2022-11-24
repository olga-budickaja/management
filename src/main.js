import Vue from 'vue'
import Vuex from "vuex";
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import components from "@/UI";
import {store} from './store/index'

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  icons: {
    iconfont: 'mdi'
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
