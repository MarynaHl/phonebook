import { useSelector } from 'react-redux';

import { getFilterValue } from '../../redux/filter/filterSlice';
import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

import ContactsListItem from './ListItem';

import { ContactsList, Message } from './Contacts.styled';

export default function Contacts() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data: contacts, isLoading } = useFetchContactsQuery({
    refetchOnMountOrArgChange: isLoggedIn,
  });

  // for filter
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  let filteredContacts = [];

  if (contacts) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <ContactsList>
      {isLoading && (
        <p>
          <b>Loading...</b>
        </p>
      )}
      {contacts &&
        filteredContacts.map(contact => (
          <ContactsListItem key={contact.id} {...contact} />
        ))}
      {contacts?.length === 0 && <Message>Phonebook is empty</Message>}
    </ContactsList>
  );
}
