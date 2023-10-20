import React from "react";
import styled from "styled-components";
import theme from "../../style/ThemeStyles";

const LogoStr = styled.div`
  color: transparent;
  font-size: ${theme.fontSize.projectText};
  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  font-family: "DM Sans";
  &:hover ${LogoStr} {
    color: ${theme.colors.hover};
  }
`;

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoStr>Anastasiya</LogoStr>
      <LogoStr>Alisenok</LogoStr>
    </LogoContainer>
  );
};

export default Logo;
