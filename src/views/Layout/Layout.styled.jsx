import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainWrapper = styled.div`
  min-height: calc(100vh - 115px);
  padding: 20px 0px;
`;

export const Header = styled.header`
  box-shadow: 0px 4px 20px #eee;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  position: relative;
  font-size: 18px;
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  padding: 17px 6px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
  &.active::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 4px;
    background-color: var(--accent-color);
  }
`;

export const Footer = styled.footer`
  padding: 20px 0px;
  box-shadow: 0 -4px 20px #ccc;
`;
