import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  retunr(
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
