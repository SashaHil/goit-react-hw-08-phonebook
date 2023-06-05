import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const Field = styled(FormikField)`
  outline: transparent;

  &:focus {
    border: 2px solid rgba(33, 243, 215, 0.6);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;

  margin-bottom: 10px;

  background-color: #2196f3;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
