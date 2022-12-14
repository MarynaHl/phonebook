import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  useAddNewContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsApi';

import { FormTag, InputField, FormBtn } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();

  const [addNewContact, { isLoading, isSuccess }] = useAddNewContactMutation();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isMatch = checkForMatches(name);

    if (isMatch) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    addNewContact({ name, number });
    if (isSuccess) {
      toast.success('Successfully added!');
    }
    resetState();
  };

  const checkForMatches = name => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormTag onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>Number</p>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <p>
        <FormBtn type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add contact'}
        </FormBtn>
      </p>
    </FormTag>
  );
}
