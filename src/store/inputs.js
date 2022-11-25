export const inputsModule = {
  state: () => ({
      searchQuery: '',
      selectedNameEmail: '',
      selectedSelect: '',
      selectedSortState: '',
      sortNameEmails: [
          {value: 'surname', name: 'Sorts name', icon: 'mdi-sort-alphabetical-ascending'},
          {value: 'email', name: 'Sorts email', icon: 'mdi-email-outline'},
      ],
      sortSelects: [
          {id: 1 ,value: 'text', name: 'Text Search', icon: 'mdi-magnify-expand', formVision: 'search-user'},
          {id: 2 ,value: 'roles', name: 'Roles', icon: 'mdi-sort-variant', formVision: 'sort-roles'},
          {id: 3 ,value: 'state', name: 'State', icon: 'mdi-lock-open-variant-outline', formVision: 'sorts-state'},
          {id: 4 ,value: 'sorts', name: 'Sorts Users', icon: 'mdi-sort', formVision: 'selected-name-email'},
      ],
      sortsSortsState: [
          {value: 'status', name: 'is Active', icon: 'mdi-account-badge-outline'},
      ],
      selectedChecks: 'Roles',
      sortedChecks: ['Role1', 'Role2', 'Role3', 'Role4'],
  }),
  getters: {
      sortedUsers(state) {
          return [...state.users].sort((user1, user2) => {
              return user1[state.selectedNameEmail.value]?.localeCompare(user2[state.selectedNameEmail.value]);
          });
      },
      sortedAndSearchedUsers(state, getters) {
          // let arr = getters.sortedUsers
          // arr.splice(getters.sortedUsers.length -1)
          return getters.sortedUsers.filter(user => user.surname.toLowerCase().includes(state.searchQuery.toLowerCase()));
      },
  },
  mutations: {
      setSearchQuery(state, searchQuery) {
          state.searchQuery = searchQuery;
      },
      setSelectedNameEmail(state, selectedNameEmail) {
          state.selectedNameEmail = selectedNameEmail
      },
      setSelectedSelect(state, selectedSelect) {
          state.selectedSelect = selectedSelect
      },
      setSelectedChecks(state, selectedChecks) {
          state.sortSelects = selectedChecks
      },
      setSortsSortsState(state, sortSortsState) {
          state.sortSortsState = sortSortsState
      }
  },
    namespaced: true
}