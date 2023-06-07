import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  min-width: 300px;

  margin-bottom: 15px;

  border-right: none;
  border-bottom: 2px solid rgb(33, 150, 243);
  border-left: none;
  border-top: none;

  outline: none;

  background-color: transparent;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: white;

  &:focus {
    border-bottom: 2px solid rgba(33, 243, 215, 0.6);
    border-left: none;
    border-top: none;

    outline: none;
  }
`;
