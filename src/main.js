// import Vue from 'vue'
// import Vuex from "vuex";
// import vuetify from './plugins/vuetify'
// import '@mdi/font/css/materialdesignicons.css'
// import App from './App.vue'
// import router from './router'
// import components from "@/UI";
// import {store} from './store/index'
// import {KeycloakPlugin} from "@/plugins/keykloak";
//
// components.forEach(component => {
//   Vue.component(component.name, component)
// })
//
// Vue.use(KeycloakPlugin)
// Vue.use(Vuex)
//
// Vue.config.productionTip = false
//
// Vue.$keycloak.init({ onLoad: 'login-required', checkLoginIframe: false }).then((auth) => {
//     if (!auth) {
//         window.location.reload();
//     } else {
//         new Vue({
//             vuetify,
//             KeycloakPlugin,
//             icons: {
//                 iconfont: 'mdi'
//             },
//             store,
//             router,
//             render: h => h(App)
//         }).$mount('#app')
//         console.log(Vue.$keycloak.tokenParsed.preferred_username)
//     }
// })

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
