import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";
import NavList from "../../components/NavList/NavList";
import { Container } from "../../components/Container/Container.styled";
import { Burger } from "../../components/Burger/Burger";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderContainer = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.screen.availWidth);
  const [click, setClick] = useState(false);
  window.addEventListener("resize", () => {
    setWindowWidth(window.screen.availWidth);
  });
  return (
    <Header>
      <Logo />
      {windowWidth <= 768 && (
        <>
          <NavList active={click} setActive={setClick} />
          <Burger click={click} setClick={setClick} />
        </>
      )}
      {windowWidth > 768 && (
        <Container width="60%" width1000="75%">
          <NavList active={click} setActive={setClick} />
          <Contacts />
        </Container>
      )}
    </Header>
  );
};
