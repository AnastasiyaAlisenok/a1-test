import React from "react";
import { Title } from "../../components/Title/Title.styled";
import { GradientText } from "../GreetingSection/GreetingText/GreetingText";
import { Text } from "../../components/Text/Text.styled";
import theme from "../../style/ThemeStyles";

const MailSection = (): JSX.Element => {
  return (
    <section>
      <Title
        color="#1E0E62"
        textAlign="center"
        fontSize="38px"
        fontWeight="700"
        lineHeight="50px"
        marginBottom="5px"
      >
        For any questions please mail me:
      </Title>
      <Text
        color={theme.colors.linkColor}
        fontSize="38px"
        fontWeight="700"
        lineHeight="50px"
        marginBottom="100px"
        width="100%"
        textAlign="center"
      >
        <GradientText>strelkinz1@yandex.ru</GradientText>
      </Text>
    </section>
  );
};

export default MailSection;
