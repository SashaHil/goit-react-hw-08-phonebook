import { Button, Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from 'components/Filter/Filter.styled';
import { Form } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
        Name
        <Input type="text" name="name" autoComplete="off" required />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" autoComplete="off" required />
      </Label>
      <Label>
        Password
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