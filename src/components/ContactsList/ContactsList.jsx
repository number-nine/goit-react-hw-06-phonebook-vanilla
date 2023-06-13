import { useSelector, useDispatch } from 'react-redux';
import {getAuth, getFilter, getContacts} from 'redux/selectors'

import { removeContact } from 'redux/actions';
import {
  ListWrapper,
  PrivateContact,
  SharedContact,
} from './ContactsList.styled';
import { Button } from '../common.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const { isLoggedIn } = useSelector(getAuth);

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
      (!contact.isPrivate || isLoggedIn)
  );
  const dispatch = useDispatch();
  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, number, isPrivate }) => {
        return (
            <li key={id}>
              {name}: {number}
              {isLoggedIn &&
                (isPrivate ? (
                  <PrivateContact>private</PrivateContact>
                ) : (
                  <SharedContact>shared</SharedContact>
                ))}
              {isLoggedIn && (
                <Button
                  type="button"
                  onClick={() => dispatch(removeContact(id))}
                >
                  Delete
                </Button>
              )}
            </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
