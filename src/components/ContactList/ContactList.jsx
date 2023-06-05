import { Button } from 'components/ContactForm/ContactForm.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ListItem, Name } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && <Loader />}

      {!filteredContacts?.length && !error && !isLoading && (
        <b>No contacts found.</b>
      )}
      {error && <b>{error}</b>}

      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <Name>{name}: </Name>
              <p>{number} </p>
              <Button type="button" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
};
