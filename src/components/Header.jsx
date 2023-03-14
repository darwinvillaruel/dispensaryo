import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Search from './Search';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar
        color='faded'
        light
        className='navbar p-4'>
        <Container>
          <div className='row justify-content-center'>
            <div className='col-4'>
              <NavbarToggler
                onClick={toggleNavbar}
                className='me-2'
              />
              <NavbarBrand
                href='/'
                className='navbar-brand px-4'>
                DISPENSARYO
              </NavbarBrand>
            </div>
            <div className='col-8'>
              <Search />
            </div>
            <Collapse
              isOpen={!collapsed}
              navbar>
              <Nav navbar>
                <NavItem className='nav-item py-2'>
                  <NavLink to='/verify'>Verify</NavLink>
                </NavItem>
                <NavItem className='nav-item py-2'>
                  <NavLink to='https://github.com/darwinvillaruel/dispensaryo.git'>
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </Navbar>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'gray' }} />
    </>
  );
};

export default Header;
