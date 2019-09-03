import React from 'react';
import { Link } from 'react-router-dom';


import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';

const navStyle = {
  diplay: 'inline',
  border: 'red',
};

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth/> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
    <ul style={navStyle}>
      <li style={navStyle}>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li style={navStyle}>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li style={navStyle}>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li style={navStyle}>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li style={navStyle}>
        <SignOutButton />
      </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
);

export default Navigation;
