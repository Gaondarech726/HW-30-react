import { statusFilters } from './store';

export const getContacts = state => {
  const { contacts, filters } = state;
  if (filters.status === statusFilters.favourites) {
    return contacts.filter(contact => contact.favourites);
  }
  if (filters.status === statusFilters.default) {
    return contacts.filter(contact => !contact.favourites);
  }
  return contacts;
};

export const getStatusFilter = state => state.filters.status;
