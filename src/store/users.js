import User from "@/store/user_help";
import axios from "axios";
import interceptorsSetup from '@/helpers/interceptors';


export const usersModule = {
    state: () => ({
        logged: '',
        token: '',
        users: [
            {
                id: 'KJGSREJGAB',
                firstname: 'Adler',
                lastname: 'Tim',
                email: 'tim.adler@mousterage.de',
                createdOn: '2022-11-30T20:39:03.218Z',
                username: 'adler',
                enabled: true
            },
            {
                id: 'RJBGTBST',
                firstname: 'Bader',
                lastname: 'Karl',
                email: 'karl.bader@mousterage.de',
                createdOn: '2022-11-30T20:39:03.218Z',
                username: 'bader',
                enabled: false
            },
            {
                id: 'HDSHGGESN',
                firstname: 'Dozer',
                lastname: 'Nadja',
                email: 'nadja.dozer@company.de',
                createdOn: '2022-11-30T20:39:03.218Z',
                username: 'doser',
                enabled: true
            },
            {
                id: 'FKNGZKNFKN',
                firstname: 'Eder',
                lastname: 'Klaus',
                email: 'klaus.eder@company.de',
                createdOn: '2022-11-30T20:39:03.218Z',
                username: 'eder',
                enabled: true
            },
        ],
        user: [],
        page: 1,
        limit: 10,
        isLoading: false,
        status: 'active'
    }),
    getters: {
        session: state => state.session,
        logged: state => state.session.logged,
        token: state => state.session.token,
        users(state) {
            return state.users
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        NEW_USER(state, payload) {
            state.users.push(payload)
        },
        USER_ID(state, payload) {
            state.user.push(payload)
        },
        DELETE_USER(state, userId) {
            let users = users.filter(u => u.id !== userId)
            state.users = users;
        },
        setUsers: (state, users) => {
            state.users = users
        },
        setUser(state, user) {
            state.user = user
        },
        setStatus(state, status) {
            state.status = status
        },
        STATUS_USER(state, getter) {
            getter.user.push(state.status)
        },
    },
    actions: {
        async createUser({state, commit}, payload) {
            commit('setIsLoading', true);
            try {
                const newUser = new User(
                    payload.firstname,
                    payload.lastname,
                    payload.username,
                    payload.email,
                    payload.realm,
                    payload.password,
                    payload.createdOn,
                    payload.id
                )
                const user = payload.id
                commit('USER_ID', user)
                commit('NEW_USER', {
                    ...newUser,
                })
            } catch (e) {
                console.log(e)
                throw e
            } finally {
                commit('setIsLoading', false);
            }

        },
        async fetchUsers({commit, state}) {
            try {
                commit('setIsLoading', true)
                interceptorsSetup()
                axios.get('http://rdp.nks.com.ua:55002/api/users/list')
                    .then(response => {
                        state.users = response.data.data.users
                    })
                commit('setIsLoading', false)
            } catch (e) {
                console.log(e)
            }
        },
        async removeUser({commit}, user) {
            commit('DELETE_USER', user.id);
        },
        async statusUser({commit}) {
            commit('STATUS_USER')
        }
    },

}