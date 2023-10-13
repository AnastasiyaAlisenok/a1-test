import React from "react";
import { Container } from "../../components/Container/Container.styled";
import { GreetingText } from "./GreetingText/GreetingText";

const GreetingSection = (): JSX.Element => {
  return (
    <Container width="100%">
      <GreetingText />
    </Container>
  );
};

export default GreetingSection;
