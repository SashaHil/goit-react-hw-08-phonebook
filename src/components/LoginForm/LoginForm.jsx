import { Button, Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AdditionalLoginRegisterFiled, Form } from './LoginForm.styled';
import { BsEnvelopeAt, BsKey } from 'react-icons/bs';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
