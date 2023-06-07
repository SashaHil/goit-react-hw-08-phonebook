import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  min-width: 300px;

  outline: transparent;

  &:focus {
    border: 2px solid rgba(33, 243, 215, 0.6);
  }
`;
