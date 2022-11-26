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
    }),
    namespaced: true
}