import styled from 'styled-components';
import { NavLink as NavLinkComponent } from 'react-router-dom';

export const NavLink = styled(NavLinkComponent)`
  margin-left: 5px;
  padding: 5px 10px;

  text-decoration: none;

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
