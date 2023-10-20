import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title.styled";
import { GradientText } from "../GreetingSection/GreetingText/GreetingText";
import { Text } from "../../components/Text/Text.styled";
import theme from "../../style/ThemeStyles";

const Section = styled.section`
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;

const MailSection = (): JSX.Element => {
  return (
    <Section>
      <Title
        color="#1E0E62"
        textAlign="center"
        fontSize="3.7rem"
        fontWeight="700"
        lineHeight="50px"
        marginBottom="5px"
      >
        For any questions please mail me:
      </Title>
      <Text
        color={theme.colors.linkColor}
        fontSize="3.7rem"
        fontWeight="700"
        lineHeight="50px"
        marginBottom="0"
        width="100%"
        textAlign="center"
      >
        <GradientText>strelkinz1@yandex.ru</GradientText>
      </Text>
    </Section>
  );
};

export default MailSection;
