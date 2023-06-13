import { nanoid } from 'nanoid';
import contacts from 'controllers/local-data-provider';

const initialState = {
  contacts: contacts.map(contact => ({ ...contact, id: nanoid() })),
  filter: '',
  auth: {
    userName: '',
    isLoggedIn: false,
  },
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'filter/update': {
        return { ...state, filter: action.payload };
      }
      case 'auth/login': {
        return { ...state, auth: action.payload };
      }
      case 'auth/logout': {
        return { ...state, auth: action.payload };
      }
      case 'contacts/add': {
        return { ...state, contacts: [...state.contacts, action.payload] };
      }
      case 'contacts/remove': {
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload),
        };
      }
      default:
        return state;
    }
};
