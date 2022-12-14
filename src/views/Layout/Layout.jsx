import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import UserMenu from 'components/UserMenu/UserMenu';

import {
  Container,
  Header,
  HeaderNav,
  Link,
  Footer,
  MainWrapper,
} from './Layout.styled';

export default function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header>
        <Container>
          <HeaderNav>
            <div>
              <Link to="/">Home</Link>
              {isLoggedIn && <Link to="/contacts">contacts</Link>}
            </div>
            <div>
              {!isLoggedIn && <Link to="/register">register</Link>}
              {!isLoggedIn && <Link to="/login">login</Link>}
            </div>
            {isLoggedIn && <UserMenu />}
          </HeaderNav>
        </Container>
      </Header>

      <Container>
        <MainWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainWrapper>
      </Container>

      <Footer>
        <Container>
          2022, GoIT Homework - Phonebook,{' '}
          <a
            href="https://github.com/MarynaHl"
            noopener="true"
            noreferrer="true"
            target="_blank"
            rel="noreferrer"
          >
            MarynaHl
          </a>{' '}
          ©
        </Container>
      </Footer>
    </>
  );
}
