import React from 'react';
import logo from '../../assets/noweLogo.png';

import { Nav, NavbarContainer, NavLogo } from './NavElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={logo} />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
