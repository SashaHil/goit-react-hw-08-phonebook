import styled from 'styled-components';

export const Form = styled.form`
  @media screen and (min-width: 320px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 130px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const AdditionalLoginRegisterFiled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
