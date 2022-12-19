import Keycloak from 'keycloak-js'
import Vue from "vue";

const initOptions = {
    url: process.env.VUE_APP_KEYCLOAK_URL,
    realm: process.env.VUE_APP_KEYCLOAK_REALM,
    clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
}

const keycloak = Keycloak(initOptions)

export const KeycloakPlugin = {
    install: Vue => {
        Vue.$keycloak = keycloak
    }
}

// KeycloakPlugin.install = Vue => {
//     Vue.$keycloak = keycloak
//     Object.defineProperties(Vue.prototype, {
//         $keycloak: {
//             get() {
//                 return keycloak
//             }
//         }
//     })
// }

Vue.use(KeycloakPlugin)

export default KeycloakPlugin
