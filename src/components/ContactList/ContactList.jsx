import { Button } from 'components/ContactForm/ContactForm.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ListItem, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <Text>{name}: </Text>
              <Text>{number} </Text>
              <Button
                disabled={isLoading}
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
};
