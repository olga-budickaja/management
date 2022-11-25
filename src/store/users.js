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
        applications: [
            {
                id: 'VJBJBRKVB',
                app: 'KJGSREJGAB',
                name: '.CARD',
            },
            {
                id: 'HTHTJJY',
                app: 'KJGSREJGAB',
                name: '.EXTERNAL',
            },
            {
                id: 'JAWHRAGH',
                app: 'RJBGTBST',
                name: '.CARD',
            },
            {
                id: 'FD.KNDFK',
                app: 'RJBGTBST',
                name: '#DigitaldentityManagement',
            },
            {
                id: 'BJLDGSBGL',
                app: 'HDSHGGESN/LK',
                name: '.VISIT',
            },
            {
                id: 'JBGJSGGB.',
                app: 'FKNGZKNFKN',
                name: '.ACCESS',
            },
            {
                id: 'JBZGSJBFJZ',
                app: 'FKNGZKNFKN',
                name: '#DigitaldentityManagement',
            },
            {
                id: 'GSGHTHNHMIL',
                app: 'FKNGZKNFKN',
                name: '.EXTERNAL',
            },
        ],
        roles: [
            {id: 'NLKGNZFKN', rol: 'VJBJBRKVB', user: 'KJGSREJGAB', name: 'Card Management'},
            {id: 'KNTHNLSK', rol: 'HTHTJJY', user: 'KJGSREJGAB', name: 'Onboard Manager'},
            {id: 'ZKLGRZK', rol: 'JAWHRAGH', user: 'RJBGTBST', name: 'Card Management'},
            {id: 'G/GERHHI', rol: 'FD.KNDFK', user: 'RJBGTBST', name: 'DIM Manager'},
            {id: 'BJJGBD', rol: 'BJLDGSBGL', user: 'HDSHGGESN/LK', name: 'Facility Management'},
            {id: 'HJJRYJDRY', rol: 'JBGJSGGB.', user: 'FKNGZKNFKN', name: 'Access Manager'},
            {id: 'HDJHDJKJJNHBFD', rol: 'JBZGSJBFJZ', user: 'FKNGZKNFKN', name: 'DIM Manager'},
            {id: 'DHGHYMK.L', rol: 'GSGHTHNHMIL', user: 'FKNGZKNFKN', name: 'External Manager'},
        ],
        isLoading: false
    }),
    mutations: {
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        NEW_USER(state, payload) {
            state.users.push(payload)
        },
        setUsers(state, users) {
            state.users = users
        },
        setApplications(state, applications) {
            state.applications = applications
        },
        setRoles(state, roles) {
            state.roles = roles
        },
        REMOVE_USER(state, userId) {
            let users = state.users.filter(u => u.id !== userId);
            state.users = users;
        },
    },
    getters: {
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
    namespaced: true
}