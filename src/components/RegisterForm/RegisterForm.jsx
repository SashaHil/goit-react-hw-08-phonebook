import { Button, Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from 'components/Filter/Filter.styled';
import { Form } from 'components/LoginForm/LoginForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState(
    'Password should have more than 7 symbols and includes numbers'
  );
  const [passwordTrue, setPasswordTrue] = useState(false);

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

  const onBlur = e => {
    switch (e.target.name) {
      case 'password':
        setPasswordTrue(true);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" required />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input
          onBlur={e => onBlur(e)}
          type="password"
          name="password"
          required
        />
      </Label>
      {passwordError && passwordTrue && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <Button type="submit">Register</Button>
    </Form>
  );
};
