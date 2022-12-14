// ContactsListItem
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';

import { ListItem, UserName, DeleteBtn } from './Contacts.styled';

export default function ContactsListItem({ name, number, id }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      <p>
        <UserName>{name}: </UserName>
        {number}
      </p>
      <DeleteBtn onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting ? 'deleting...' : 'delete'}
      </DeleteBtn>
    </ListItem>
  );
}
