import User from "@/store/user_help";

export const usersModule = {
    state: () => ({
        users: [
            {
                id: 'KJGSREJGAB',
                surname: 'Adler',
                firstname: 'Tim',
                email: 'tim.adler@mousterage.de',
                date: '21.10.2022',
                time: '16:58',
                username: 'adler',
            },
            {
                id: 'RJBGTBST',
                surname: 'Bader',
                firstname: 'Karl',
                email: 'karl.bader@mousterage.de',
                date: '18.10.2022',
                time: '13:16',
                username: 'bader',
            },
            {
                id: 'HDSHGGESN/LK',
                surname: 'Dozer',
                firstname: 'Nadja',
                email: 'nadja.dozer@company.de',
                date: '16.10.2022',
                time: '10:23',
                username: 'doser',
            },
            {
                id: 'FKNGZKNFKN',
                surname: 'Eder',
                firstname: 'Klaus',
                email: 'klaus.eder@company.de',
                date: '23.10.2022',
                time: '15:45',
                username: 'eder',
            },
        ],
        user: [],
        isLoading: false
    }),
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
        setUsers(state, users) {
            state.users = users
        },
        setUser(state, user) {
            state.user = user
        },
        REMOVE_USER(state, userId) {
            let users = state.users.filter(u => u.id !== userId);
            state.users = users;
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    actions: {
        async createUser({state, commit}, payload) {
            commit('setIsLoading', true);
            try {
                const newUser = new User(
                    payload.surname,
                    payload.firstname,
                    payload.username,
                    payload.email,
                    payload.realm,
                    payload.password,
                    payload.date,
                    payload.time,
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
        async removeUser({commit}, user) {
            commit('REMOVE_USER', user.id);
        },
    },
    namespaced: false
}