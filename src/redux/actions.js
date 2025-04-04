import { nanoid } from 'nanoid';

export const addContact = text => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      favourites: false,
      text,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const toggleFavourites = contactId => {
  return {
    type: 'contacts/toggleFavourites',
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
