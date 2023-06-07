import styled from 'styled-components';
import { NavLink as NavLinkComponent } from 'react-router-dom';

export const NavLink = styled(NavLinkComponent)`
  @media screen and (min-width: 320px) {
    padding: 5px;

    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px;

    font-size: 16px;
  }

  margin-left: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;

  text-decoration: none;

  background-color: #2196f3;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:first-child {
    margin-left: 0;
  }
`;
