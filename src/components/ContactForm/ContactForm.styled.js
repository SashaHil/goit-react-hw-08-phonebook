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
  @media screen and (min-width: 320px) {
    min-width: 220px;
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

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

export const Label = styled.label`
  @media screen and (min-width: 320px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
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

  margin-bottom: 10px;
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
