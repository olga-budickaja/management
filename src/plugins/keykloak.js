import Keycloak from 'keycloak-js'
import Vue from "vue";

const initOptions = {
    url: 'https://keycloak.nks.com.ua/auth/realms/rm_dev_realm/protocol/openid-connect/auth',
    realm: 'rm_dev_realm',
    clientId: 'ui_dev',
}

const keycloak = Keycloak(initOptions)

const KeycloakPlugin = {
    install: Vue => {
        Vue.$keycloak = keycloak
    }
}

Vue.use(KeycloakPlugin)

export default KeycloakPlugin
