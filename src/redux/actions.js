import { nanoid } from 'nanoid';

export const updateFilter = query => {
  return {
    type: 'filter/update',
    payload: query,
  };
};

export const loginAuth = ({ userName }) => {
  return {
    type: 'auth/login',
    payload: {
      userName,
      isLoggedIn: true,
    },
  };
};

export const logoutAuth = () => {
  return {
    type: 'auth/logout',
    payload: {
      userName: '',
      isLoggedIn: false,
    },
  };
};

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/add',
    payload: {
      name: name.trim(),
      number: number.trim(),
      id: nanoid,
    },
  };
};

export const removeContact = (id) => {
  return {
    type: 'contacts/remove',
    payload: id,
  };
};
