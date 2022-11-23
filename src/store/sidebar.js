
export const sidebarModule = {
    state: () => ({
        itemsSideBar: [
            { title: 'Users', icon: 'mdi-account-lock-open-outline' },
            { title: 'Active', icon: 'mdi-lock-open-variant-outline' },
            { title: 'Rollen', icon: 'mdi-share-variant-outline' },
        ],
    }),
    namespaced: true
}