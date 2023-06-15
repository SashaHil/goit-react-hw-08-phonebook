import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  &:last-child {
    margin: 0;
  }
`;

export const Text = styled.p`
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  font-weight: 650;
  color: white;
`;

export const Name = styled.p`
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 650;

  color: white;
`;

export const Number = styled.p`
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 650;

  color: white;
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

  margin-left: 5px;

  background-color: #2196f3;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 30px;
`;

export const AdditionalField = styled.div`
  margin-left: auto;
`;
