import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;

  &:last-child {
    margin: 0;
  }
`;

export const Text = styled.p`
  font-weight: 650;
  color: white;
`;

export const Name = styled.p`
  font-weight: 650;

  color: white;

  text-align: center;
`;

export const Number = styled.p`
  font-weight: 650;

  color: white;

  text-align: center;
`;

export const Button = styled.button`
  padding: 5px 10px;

  margin-left: auto;

  background-color: #2196f3;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 10px;
`;
