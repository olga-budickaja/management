export const formModule = {
    state: () => ({
        inputRules: {
            required: value => !!value || 'Please fill in the field',
            length: value => (value && value.length >= 2) || 'Min 2 characters',
            name: value => {
                const pattern = /^[a-zа-яё]+$/i
                return pattern.test(value) || 'Invalid name.'
            },
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                return pattern.test(value) || 'Invalid e-mail.'
            },
            password: value => (value && value.length >= 6) || 'Min 6 characters',
            confirmPassword: value => (value && value.length >= 6) || 'Passwords do not match',
        },
        applications: [
            { value: '.ACCESS', children: ['Access Manager'] },
            { value: '.CARD', children: ['Card Management'] },
            { value: '.CERTIFY' },
            { value: '.EXTERNAL', children: ['Default-User', 'Onboard Manager', 'External Employee Management' ] },
            { value: '.FM' },
            { value: '.OM' },
            { value: '.VISIT', children: ['Visitor Management', 'Facility-Management', 'Host of Visitors', 'Receptionist', 'Preregister ViSIT'] },
            { value: '.WTime' },
            { value: '#Checklisten Management' },
            { value: '#Digitalldentity Management', children: ['DIM-Management'] },
            { value: '#Employee Network' },
            { value: '#FotoApp' },
            { value: '#Onboarding' },
            { value: '#Rooms & Resources' },
            { value: '#Userdentity' },
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
        ]
    }),
    namespaced: true
}