import { useDispatch, useSelector } from 'react-redux';
import { useLogoutUserMutation, logoutAction } from 'redux/auth/authApi';

import { getUserName } from 'redux/auth/authSelectors';

import { Greeting, Btn } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const name = useSelector(getUserName);

  // logout user by RTK and then save it to State by Slice
  const logoutAndSaveToState = async () => {
    await logoutUser();
    dispatch(logoutAction());
  };

  return (
    <div>
      <Greeting>Welcome, {name ? name : 'user'} </Greeting>

      <Btn type="button" onClick={logoutAndSaveToState}>
        Logout
      </Btn>
    </div>
  );
}
