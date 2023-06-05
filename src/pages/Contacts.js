import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  // const [userName, setUserName] = useState('');
  // const [userNumber, setUserNumber] = useState('');
  // const [idUser, setIdUser] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const getFilteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>Contacts</Helmet>
      <ContactForm />

      {isLoading && <Loader />}
      {contacts.length === 0 &&
        !isLoading &&
        !error &&
        alert('Your phonebook is empty')}

      {contacts.length !== 0 && (
        <div>
          <Filter />
          {getFilteredContacts.length === 0 &&
            !isLoading &&
            alert('You have no contact with this name')}
          <ContactList />
        </div>
      )}

      {error && <b>{error}</b>}
    </>
  );
};

export default ContactsPage;
