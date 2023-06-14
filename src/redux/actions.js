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

export const addContact = (values) => {
  return {
    type: 'contacts/add',
    payload: {
      ...values,
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    },
  };
};

export const removeContact = (id) => {
  return {
    type: 'contacts/remove',
    payload: id,
  };
};
