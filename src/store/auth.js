import {AuthAPI} from "@/api";

export const authModule = {
    state: () => ({
        credentials: {
            token: localStorage.getItem('token') || null,
        },
    }),
    getters: {
    },
    mutations: {
        setToken(state, token) {
            state.credentials.token = token
            localStorage.setItem('token', token)
        },
        deleteToken(state) {
            state.credential.token = null;
            localStorage.removeItem('token');
        },
    },
    actions: {
        onLogin(commit) {
            return AuthAPI.login.then((res) => {
                commit('setToken', res.token);
            })
        },
        onLogout({commit}) {
            commit('deleteToken');
        }
    },
    namespaced: true
}