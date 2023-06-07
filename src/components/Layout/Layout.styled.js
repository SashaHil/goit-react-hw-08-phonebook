import styled from 'styled-components';

export const Container = styled.div`
  min-width: 520px;
  min-height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-left: auto;
  margin-right: auto;

  padding: 40px 20px;

  border: 1px solid black;
  border-radius: 6px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url(https://static8.depositphotos.com/1029554/813/i/950/depositphotos_8138619-stock-photo-old-style-phone-over-yellow.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 3px 5px 5px grey;
`;
