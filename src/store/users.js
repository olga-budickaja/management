export const usersModule = {
    state: () => ({
        users: [
            {
                id: 'KJGSREJGAB',
                surname: 'Adler',
                firstname: 'Tim',
                date: '21.10.2022',
                time: '16:58',
                username: 'adler',
            },
            {
                id: 'RJBGTBST',
                surname: 'Bader',
                firstname: 'Karl',
                date: '18.10.2022',
                time: '13:16',
                username: 'bader',
            },
            {
                id: 'HDSHGGESN/LK',
                surname: 'Doser',
                firstname: 'Nadja',
                date: '16.10.2022',
                time: '10:23',
                username: 'doser',
            },
            {
                id: 'FKNGZKNFKN',
                surname: 'Eder',
                firstname: 'Klaus',
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
        async removeUser({commit}, user) {
            commit('REMOVE_USER', user.id);
        },
    },
    namespaced: true
}