import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Message = styled.p`
  color: black;
  font-weight: 500;
  font-size: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: context-menu;
  border: 1px solid #fff;
  transition-property: background-color, border-color;
  transition: 300ms ease-out;

  &:hover {
    border-color: #ccc;
    background-color: #f8f8f8;
  }
`;

export const UserName = styled.span`
  font-weight: 700;
  color: var(--text-color);
  margin-right: 15px;
`;

export const DeleteBtn = styled.button`
  width: 100px;
  background-color: #fff;
  border: 2px solid #999;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: #ff3131;
  }
`;
