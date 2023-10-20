import React from "react";
import { Container } from "../../components/Container/Container.styled";
import { GreetingText } from "./GreetingText/GreetingText";
import { GreetingPhoto } from "./GreetingPhoto/GreetingPhoto";

const GreetingSection = (): JSX.Element => {
  return (
    <Container
      width="100%"
      marginBottom="208px"
      flexDirection="column-reverse"
      marginBottom1000="100px"
    >
      <GreetingText />
      <GreetingPhoto />
    </Container>
  );
};

export default GreetingSection;
