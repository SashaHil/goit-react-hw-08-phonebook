import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { EditForm } from 'components/EditForm/EditForm';
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
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const getFilteredContacts = useSelector(selectFilteredContacts);
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [contactId, setContactId] = useState('');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isOpenModal = (name, number, id) => {
    setIsModal(true);
    setUserName(name);
    setUserNumber(number);
    setContactId(id);
  };

  const isCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <Helmet>Contacts</Helmet>
      <ContactForm />

      {isLoading && <Loader />}

      {contacts.length !== 0 && (
        <div>
          <Filter />
          {getFilteredContacts.length !== 0 && (
            <ContactList isOpenModal={isOpenModal} />
          )}
        </div>
      )}

      {error && <b style={{ color: 'red' }}>{error}</b>}

      {isModal && (
        <EditForm
          name={userName}
          number={userNumber}
          contactId={contactId}
          isCloseModal={isCloseModal}
        />
      )}
    </>
  );
};

export default ContactsPage;
