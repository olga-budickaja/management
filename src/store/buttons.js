export const buttonsModule = {
    state: () => ({
        btnDrops: [
            { id: 100, name: 'Edit', icon: 'mdi-file-edit-outline' },
            { id: 101, name: 'Reset password', icon: 'mdi-account-lock-open-outline' },
            { id: 102, name: 'Roles', icon: 'mdi-account-tie' },
            { id: 103, name: 'Disable user', icon: 'mdi-account-remove-outline' },
            { id: 103, name: 'Delete user', icon: 'mdi-trash-can-outline' },
        ],
    }),
    namespaced: true
}