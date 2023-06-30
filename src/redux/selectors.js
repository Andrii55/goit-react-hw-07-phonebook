export const selectContacts = store => store.contacts.items;

export const selectFilter = store => store.filter.value;

export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;
