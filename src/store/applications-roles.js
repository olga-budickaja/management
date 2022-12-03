import Application from "@/store/applications_help";

export const applicationsRoles = {
    state: () => ({
        applications: [
            {
                id: 1,
                name: '.ACCESS',
                children: [
                    { name: 'Access Manager' },
                ],
            },
            {
                id: 3,
                name: '.CARD',
                children: [
                    { id: 4, name: 'Card Management' },
                ],
            },
            {
                id: 5,
                name: '.CERTIFY',
            },
            {
                id: 6,
                name: '.EXTERNAL',
                children: [
                    { id: 7, name: 'Default-User' },
                    { id: 8, name: 'Onboard Manager' },
                    { id: 9, name: 'External Employee Management' },
                ],
            },
            {
                id: 10,
                name: '.FM',
            },
            {
                id: 11,
                name: '.OM',
            },
            {
                id: 12,
                name: '.VISIT',
                children: [
                    { id: 13, name: 'Visitor Management' },
                    { id: 14, name: 'Facility-Management' },
                    { id: 15, name: 'Host of Visitors' },
                    { id: 16, name: 'Receptionist' },
                    { id: 17, name: 'Preregister ViSIT' },
                ],
            },
            {
                id: 19,
                name: '.WTime',
            },
            {
                id: 20,
                name: '#Checklisten Management',
            },
            {
                id: 21,
                name: '#Digitalldentity Management',
                children: [
                    { id: 22, name: 'DIM-Management' },
                ],
            },
            {
                id: 23,
                name: '#Employee Network',
            },
            {
                id: 24,
                name: '#FotoApp',
            },
            {
                id: 25,
                name: '#Onboarding',
            },
            {
                id: 26,
                name: '#Rooms & Resources',
            },
            {
                id: 27,
                name: '#Userdentity',
            },
        ],

        applicationsUser: [
            {application: '.CARD', roles: 'Card Management', user: 'KJGSREJGAB'},
            {application: '.CARD', roles: 'Onboard Manager', user: 'KJGSREJGAB'},
            {application: '.CARD', roles: 'Card Management', user: 'RJBGTBST'},
            {application: '#DigitaldentityManagement', roles: 'DIM Manager', user: 'RJBGTBST'},
            {application: '.VISIT', roles: 'Facility Management', user: 'HDSHGGESN'},
            {application: '.ACCESS', roles: 'Access Manager', user: 'FKNGZKNFKN'},
            {application: '#DigitaldentityManagement', roles: 'DIM Manager', user: 'FKNGZKNFKN'},
            {application: '.EXTERNAL', roles: 'External Manager', user: 'FKNGZKNFKN'},
        ],
        applicationUser: [],
    }),
    getters: {
        applicationsUser(state) {
            return state.applicationsUser
        },
        applicationUser(state) {
            return state.applicationUser
        }
    },
    mutations: {
        setApplicationsUser(state, applicationsUser) {
            state.applicationsUser = applicationsUser
        },
        setApplicationUser(state, applicationUser) {
            state.applicationUser = applicationUser
        },
        NEW_APPLICATION(state, payload) {
            state.applicationsUser.push(payload)
        },
        APPLICATION_ID(state, payload) {
            state.applicationUser.push(payload)
        },
    },
    actions: {
        async updateApplication({state, commit, getters}, payload) {
            commit('setIsLoading', true);
            const userId = getters.user
            try {
                const newApplication = new Application(
                    payload.application,
                    payload.user = userId.toString(),
                    payload.id
                );
                const app = payload.user

                commit('APPLICATION_ID', app)
                commit('NEW_APPLICATION', {
                    ...newApplication,
                });
                console.log(newApplication)
            } catch (e) {
                console.log(e)
                throw e
            } finally {
                commit('setIsLoading', false);
            }

        },
    },
    namespaced: false
}