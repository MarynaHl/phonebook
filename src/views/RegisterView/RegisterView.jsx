import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { useRegisterUserMutation, authAction } from '../../redux/auth/authApi';
import registerErrors from '../../services/registerErrors';

import { Form, Label, Btn } from './RegisterView.styled';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [registerUser, { isSuccess, error, isLoading }] =
    useRegisterUserMutation();

  useEffect(() => {
    registerErrors(error);
  }, [error]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    registerAndSaveToState({ name, email, password });

    if (isSuccess) {
      toast.success('Successfully registered!');
      setEmail('');
      setPassword('');
    }
  };

  // register user by RTK and then save it to State by Slice
  const registerAndSaveToState = async user => {
    try {
      const returnedUser = await registerUser(user, {
        selectFromResult: ({ data }) => data.user,
      });
      dispatch(authAction(returnedUser));
    } catch (error) {
      toast.error('Wrong e-mail or password');
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </Label>

      <Btn type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Btn>
    </Form>
  );
}
