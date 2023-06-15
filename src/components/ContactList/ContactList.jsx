import {
  AdditionalField,
  Button,
  Contact,
} from 'components/ContactList/ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { CgTrash, CgUser, CgPhone, CgEditMarkup } from 'react-icons/cg';
import { ListItem, Name, Number } from './ContactList.styled';

export const ContactList = ({ isOpenModal }) => {
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
              <Contact>
                <Name>
                  <CgUser size="18" />
                  {name}
                </Name>
                <Number>
                  <CgPhone size="18" />
                  {number}
                </Number>
              </Contact>
              <AdditionalField>
                <Button
                  disabled={isLoading}
                  type="button"
                  onClick={() => isOpenModal(name, number, id)}
                >
                  <CgEditMarkup size="18" />
                </Button>
                <Button
                  disabled={isLoading}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  <CgTrash size="18" />
                </Button>
              </AdditionalField>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
};
