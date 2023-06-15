import { Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { AdditionalLoginRegisterFiled } from 'components/LoginForm/LoginForm.styled';
import { CgUser, CgPhone, CgCloseO } from 'react-icons/cg';
import { Button } from 'components/ContactList/ContactList.styled';
import { editContact } from 'redux/contacts/operations';
import { useEffect, useState } from 'react';
import { BtnClose, Form, Modal, Overlay } from './EditForm.styled';

export const EditForm = ({ contactId, name, number, isCloseModal }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(name);
  const [userNumber, setUserNumber] = useState(number);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'number' ? setUserNumber(value) : setUserName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(editContact({ contactId, userName, userNumber }));

    isCloseModal();
  };

  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape') {
        isCloseModal();
      }
    };

    window.addEventListener('keydown', handleClose);

    return () => window.removeEventListener('keydown', handleClose);
  }, [isCloseModal]);

  const handleCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      isCloseModal();
    }
  };

  return (
    <Overlay onClick={handleCloseBackdrop}>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Label>
            <AdditionalLoginRegisterFiled>
              <CgUser size="18" />
              Name
            </AdditionalLoginRegisterFiled>
            <Input
              type="text"
              name="name"
              placeholder={name}
              value={userName}
              onChange={handleChange}
              title="Field can't be empty"
              autoComplete="off"
              required
            />
          </Label>
          <Label>
            <AdditionalLoginRegisterFiled>
              <CgPhone size="18" />
              Number
            </AdditionalLoginRegisterFiled>
            <Input
              type="tel"
              name="number"
              placeholder={number}
              value={userNumber}
              onChange={handleChange}
              title="Field can't be empty"
              autoComplete="off"
              required
            />
          </Label>
          <BtnClose type="button" onClick={isCloseModal}>
            <CgCloseO size="18" />
          </BtnClose>
          <Button type="submit">Edit</Button>
        </Form>
      </Modal>
    </Overlay>
  );
};
