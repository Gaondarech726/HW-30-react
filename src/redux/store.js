import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 0, text: 'Ваня', favourites: false },
  { id: 1, text: 'Гоша', favourites: false },
  { id: 2, text: 'Мишко', favourites: false },
  { id: 3, text: 'Афанасій', favourites: false },
  { id: 4, text: 'Хорунжий', favourites: false },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.push({ id: nanoid(), favourites: false, text: action.payload });
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    toggleFavourites: (state, action) => {
      const contact = state.find(contact => contact.id === action.payload);
      if (contact) {
        contact.favourites = !contact.favourites;
      }
    },
  },
});

export const { addContact, deleteContact, toggleFavourites } =
  contactsSlice.actions;

export const statusFilters = Object.freeze({
  all: 'all',
  default: 'default',
  favourites: 'favourites',
});

const filtersInitialState = { status: statusFilters.all };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
  },
});
