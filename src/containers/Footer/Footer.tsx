import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container/Container.styled";
import Logo from "../../components/Logo/Logo";
import { Text } from "../../components/Text/Text.styled";
import { Contacts } from "../../components/Contacts/Contacts";
import NavList from "../../components/NavList/NavList";

const Line = styled.p`
  width: 100%;
  background-color: #42446e;
  text-decoration: underline;
  height: 1px;
  margin-bottom: 30px;
`;

const Footer = (): JSX.Element => {
  const [active, setActive] = useState(false);
  return (
    <footer id="contacts">
      <Container width="100%">
        <Logo />
        <Container
          width="70%"
          flexDirection620="column"
          width620="40%"
          marginBottom1000="2rem"
        >
          <Text
            color="#42446E"
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight="22px"
            width="25%"
            marginBottom="5px"
            textAlign="right"
            width620="100%"
          >
            +375 29 771 61 36
          </Text>
          <Text
            color="#42446E"
            fontSize="1.4rem"
            fontWeight="400"
            lineHeight="22px"
            width="25%"
            marginBottom="5px"
            textAlign="right"
            width620="100%"
          >
            strelkinz1@yandex.ru
          </Text>
          <Contacts />
        </Container>
      </Container>
      <Line />
      <Container width="100%">
        <NavList active={active} setActive={setActive} />
      </Container>
    </footer>
  );
};

export default Footer;
