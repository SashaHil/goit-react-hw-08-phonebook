import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  padding: 20px;
`;

export const Modal = styled.div`
  @media screen and (min-width: 320px) {
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  position: relative;

  border-radius: 10px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(https://st.depositphotos.com/3322093/4547/i/950/depositphotos_45475147-stock-photo-yellow-pages-phone-book.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  max-width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.label`
  @media screen and (min-width: 320px) {
    font-size: 14px;

    min-width: 205px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    min-width: 300px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: white;
`;

export const BtnClose = styled.button`
  cursor: pointer;

  margin: 0;

  position: absolute;
  top: 10px;
  right: 10px;

  color: white;
  background-color: transparent;

  border: none;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #188ce8;
  }
`;
