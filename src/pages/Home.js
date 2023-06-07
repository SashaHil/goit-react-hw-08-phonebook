import { Title } from 'components/Section/Section.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Text } from './Home.styled';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Title>Phonebook</Title>
      {isLoggedIn ? (
        <Text>Your book manager :)</Text>
      ) : (
        <Text>Register or Log in please!</Text>
      )}
    </>
  );
};

export default HomePage;
