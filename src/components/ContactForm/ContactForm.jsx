import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  ErrorMessage,
  Field,
  Button,
  Label,
  AdditionalFormFiled,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { CgAdd, CgPhone, CgUser } from 'react-icons/cg';

const InputSchema = Yup.object().shape({
  name: Yup.string().required('Must be required'),
  number: Yup.string().required('Must be required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isDublicate = ({ name, number }) => {
    const refName = name.toLowerCase().trim();
    const refNumber = number.trim();

    const dublicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === refName || contact.number === refNumber
    );
    return Boolean(dublicate);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return alert(`${name} or ${number} is already in contacts.`);
    }
    dispatch(addContact({ name, number }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={InputSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
    >
      <Form>
        <Label>
          <AdditionalFormFiled>
            <CgUser size="18" />
            Name
          </AdditionalFormFiled>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required
          />
        </Label>

        <ErrorMessage name="name" component="div" />

        <Label>
          <AdditionalFormFiled>
            <CgPhone size="18" />
            Number
          </AdditionalFormFiled>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
            required
          />
        </Label>

        <ErrorMessage name="number" component="div" />
        <Button type="submit">
          Add contact
          <CgAdd
            size="18"
            style={{
              fill: 'white',
              verticalAlign: 'middle',
              marginLeft: '5px',
            }}
          />
        </Button>
      </Form>
    </Formik>
  );
};
