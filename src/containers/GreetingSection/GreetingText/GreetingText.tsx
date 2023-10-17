import React from "react";
import styled from "styled-components";
import theme from "../../../style/ThemeStyles";

const TitleText = styled.h1`
  width: 49%;
  margin-top: 165px;
  color: ${theme.colors.titleColor};
  font-family: Poppins;
  font-size: ${theme.fontSize.bigText};
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`;

export const GradientText = styled.span`
  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GreetingText = (): JSX.Element => {
  return (
    <TitleText>
      Hi 👋, My name is <GradientText>Anastasiya Alisenok</GradientText>
      <div>I build things for web</div>
    </TitleText>
  );
};
