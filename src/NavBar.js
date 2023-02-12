import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const NavBar = () => {
  return (
    <>
      { <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='homepage'>
            Home
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Submit response</NavBtnLink>
        </NavBtn>
      </Nav>
      }
    </>
  );
};
  
export default NavBar;

