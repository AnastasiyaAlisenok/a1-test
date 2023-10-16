import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title.styled";
import theme from "../../style/ThemeStyles";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import js from "../../assets/svg/js.svg";
import ts from "../../assets/img/ts.png";
import reactImg from "../../assets/svg/react.svg";
import sass from "../../assets/svg/sass.svg";
import styledComponents from "../../assets/img/styled-components.png";
import git from "../../assets/svg/git.svg";
import github from "../../assets/svg/github.svg";
import eslint from "../../assets/img/eslint.png";
import prettier from "../../assets/img/prettier.png";
import vsCode from "../../assets/svg/vs-code.svg";

const Stack = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const TechIcon = styled.img`
  width: 90px;
  height: 90px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 60px;
  margin: 0 auto;
`;

const StackSection = (): JSX.Element => {
  return (
    <Stack id="tech-stack">
      <Title
        color={theme.colors.titleColor}
        fontSize="28px"
        lineHeight="38px"
        marginBottom="28px"
        textAlign="center"
      >
        My Tech Stack
      </Title>
      <Title
        color={theme.colors.linkColor}
        fontSize="24px"
        lineHeight="26px"
        marginBottom="70px"
        textAlign="center"
        fontWeight="400"
      >
        Technologies I’ve been working with recently
      </Title>
      <IconsContainer>
        <TechIcon src={html} alt="html-icon" />
        <TechIcon src={css} alt="css-icon" />
        <TechIcon src={js} alt="js-icon" />
        <TechIcon src={ts} alt="ts-icon" />
        <TechIcon src={reactImg} alt="react-icon" />
        <TechIcon src={sass} alt="sass-icon" />
        <TechIcon src={styledComponents} alt="styled-components-icon" />
        <TechIcon src={git} alt="git-icon" />
        <TechIcon src={github} alt="github-icon" />
        <TechIcon src={eslint} alt="eslint-icon" />
        <TechIcon src={prettier} alt="prettier-icon" />
        <TechIcon src={vsCode} alt="vs-code-icon" />
      </IconsContainer>
    </Stack>
  );
};

export default StackSection;
