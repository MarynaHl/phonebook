import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { TitleMain } from './HomeView.styled';

export default function HomeView() {
  const name = useSelector(getUserName);
  return (
    <TitleMain>
      Hello! You are at the Phonebook App. <br /> Let's{' '}
      {name ? 'check your contacts' : 'register or login'}
    </TitleMain>
  );
}
