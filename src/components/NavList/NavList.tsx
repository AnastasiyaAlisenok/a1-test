import React from "react";
import { styled } from "styled-components";
import NavLink from "../Link/NavLink";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-right: 31px;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavList = (): JSX.Element => {
  return (
    <Nav>
      <List>
        <NavLink text="Home" url="#" />
        <NavLink text="About" url="#about-me" />
        <NavLink text="Tech Stack" url="#tech-stack" />
        <NavLink text="Projects" url="#projects" />
        <NavLink text="Contacts" url="#contacts" />
      </List>
    </Nav>
  );
};

export default NavList;
