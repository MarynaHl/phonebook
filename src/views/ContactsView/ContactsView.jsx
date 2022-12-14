import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function ContactsView() {
  return (
    <>
      <Form />
      <Filter />
      <h3>Your contacts:</h3>
      <Contacts />
    </>
  );
}
