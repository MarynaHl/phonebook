import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { useLoginUserMutation, loginAction } from '../../redux/auth/authApi';
import registerErrors from '../../services/registerErrors';

import { Form, Label, Btn } from '../RegisterView/RegisterView.styled';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [loginUser, { isSuccess, error, isLoading }] = useLoginUserMutation();

  useEffect(() => {
    registerErrors(error);
  }, [error]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    loginAndSaveToState({ email, password });

    if (isSuccess) {
      setEmail('');
      setPassword('');
    }
  };

  // login user by RTK and then save it to State by Slice
  const loginAndSaveToState = async user => {
    try {
      const returnedUser = await loginUser(user, {
        selectFromResult: ({ data }) => data.user,
      });
      dispatch(loginAction(returnedUser));
    } catch (error) {
      toast.error('Wrong e-mail or password');
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
        Log In
      </Btn>
    </Form>
  );
}
