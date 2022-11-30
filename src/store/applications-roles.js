import Application from "@/store/applications_help";

export const applicationsRoles = {
    state: () => ({
        applications: [
            { value: '.ACCESS', children: ['Access Manager'], active: '' },
            { value: '.CARD', children: ['Card Management'], active: '' },
            { value: '.CERTIFY', active: '' },
            { value: '.EXTERNAL', children: ['Default-User', 'Onboard Manager', 'External Employee Management' ], active: '' },
            { value: '.FM', active: '' },
            { value: '.OM', active: '' },
            { value: '.VISIT', children: ['Visitor Management', 'Facility-Management', 'Host of Visitors', 'Receptionist', 'Preregister ViSIT'], active: '' },
            { value: '.WTime', active: '' },
            { value: '#Checklisten Management', active: '' },
            { value: '#Digitalldentity Management', children: ['DIM-Management'], active: '' },
            { value: '#Employee Network', active: '' },
            { value: '#FotoApp', active: '' },
            { value: '#Onboarding', active: '' },
            { value: '#Rooms & Resources', active: '' },
            { value: '#Userdentity', active: '' },
        ],
        roles: [
            { value: 'Access Manager', parent: '.ACCESS' },
            { value: 'Card Management', parent: '.CARD' },
            { value: 'Default-User', parent: '.EXTERNAL' },
            { value: 'Onboard Manager', parent: '.EXTERNAL' },
            { value: 'External Employee Management', parent: '.EXTERNAL' },
            { value: 'Visitor Management', parent: '.VISIT' },
            { value: 'Facility-Management', parent: '.VISIT' },
            { value: 'Host of Visitors', parent: '.VISIT' },
            { value: 'Receptionist', parent: '.VISIT' },
            { value: 'Preregister ViSIT', parent: '.VISIT' },
            { value: 'DIM-Management', parent: '#Digitalldentity Management' },
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
                    payload.roles.toString(),
                    payload.user = userId.toString(),
                    payload.id
                );
                const app = payload.id

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