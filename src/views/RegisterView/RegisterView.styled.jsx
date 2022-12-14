import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 280px;
  margin: 30px auto;
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const Btn = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  background-color: #fff;
  border: 2px solid #999;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: #eee;
  }
`;
