import { Button, Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from 'components/Filter/Filter.styled';
import {
  AdditionalLoginRegisterFiled,
  Form,
} from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { BsEnvelopeAt, BsKey } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <AdditionalLoginRegisterFiled>
          <AiOutlineUserAdd size="18" />
          Name
        </AdditionalLoginRegisterFiled>
        <Input
          type="text"
          name="name"
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        <AdditionalLoginRegisterFiled>
          <BsEnvelopeAt size="18" />
          Email
        </AdditionalLoginRegisterFiled>
        <Input
          type="email"
          name="email"
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        <AdditionalLoginRegisterFiled>
          <BsKey size="18" />
          Password
        </AdditionalLoginRegisterFiled>
        <Input
          type="password"
          name="password"
          pattern=".{7,}"
          title="The password must contain at least 7 characters"
          autoComplete="off"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
