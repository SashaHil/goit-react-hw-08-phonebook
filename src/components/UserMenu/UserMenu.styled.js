import styled from 'styled-components';

export const LogOutComponent = styled.div`
  @media screen and (min-width: 320px) {
    margin-left: 57px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  @media screen and (min-width: 320px) {
    padding: 5px;

    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px;

    font-size: 16px;
  }

  margin-left: auto;
  margin-right: auto;

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
