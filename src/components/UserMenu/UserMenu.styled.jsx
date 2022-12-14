import styled from 'styled-components';

export const Btn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #999;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: #eee;
  }
`;

export const Greeting = styled.span`
  color: var(--text-color);
  font-size: 18px;
  margin-right: 10px;
`;
