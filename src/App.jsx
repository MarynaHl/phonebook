import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Layout from 'views/Layout/Layout';
import Contacts from 'views/ContactsView/ContactsView';
import Login from 'views/LoginView/LoginView';
import Register from 'views/RegisterView/RegisterView';
import HomeView from 'views/HomeView/HomeView';
import PrivateRoute from 'views/Routes/PrivateRoute';
import PublicRoute from 'views/Routes/PublicRoute';

import {
  useFetchCurrentUserQuery,
  getCurrentUserAction,
} from 'redux/auth/authApi';
import { getToken } from 'redux/auth/authSelectors';

function App() {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const { data: result, isSuccess } = useFetchCurrentUserQuery(
    token ? token : skipToken
  );

  useEffect(() => {
    if (isSuccess) dispatch(getCurrentUserAction(result));
  }, [isSuccess, result, dispatch]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
