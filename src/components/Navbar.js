// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #444;
  color: #fff;
`;

const NavbarLink = styled.nav`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Link href="/" passHref><NavbarLink>Home</NavbarLink></Link>
    <Link href="/about" passHref><NavbarLink>About</NavbarLink></Link>
    <Link href="/projects" passHref><NavbarLink>Projects</NavbarLink></Link>
    <Link href="/skills" passHref><NavbarLink>Skills</NavbarLink></Link>
    {/* <Link href="/contact" passHref><NavbarLink>Contacts</NavbarLink></Link> */}
  </NavbarContainer>
);

export default Navbar;
