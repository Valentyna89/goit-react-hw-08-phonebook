export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
