import React from "react";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";
import NavList from "../../components/NavList/NavList";

export const Header = styled.header`
  display: flex;
  width: 100%;
`;

export const HeaderContainer = (): JSX.Element => {
  return (
    <Header>
      <Logo />
      <NavList />
      <Contacts />
    </Header>
  );
};
