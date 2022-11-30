import Vue from "vue";
import Plugin from "@/plugins/keykloak";


export const AuthAPI = {
    /**
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    login() {
        return Plugin
    },

    /**
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */

    logout() {
        return Vue.prototype.$keycloak.logout()
    }
}