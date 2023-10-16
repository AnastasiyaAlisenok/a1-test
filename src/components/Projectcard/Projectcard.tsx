import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title.styled";
import theme from "../../style/ThemeStyles";
import { Text } from "../Text/Text.styled";
import { Container } from "../Container/Container.styled";
import linkImg from "../../assets/svg/link-chain.svg";
import gitIcon from "../../assets/svg/git-icon.svg";

interface ProjectCardType {
  title: string;
  text: string;
  stackText: string;
  deployLink: string;
  gitLink: string;
  imgSrc: string;
}

const CardContainer = styled.div`
  width: 18rem;
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;

const ProjectImg = styled.img`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
`;

const TextContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TextBold = styled.div`
  width: 25%;
  color: ${theme.colors.titleColor};
  font-family: Poppins;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Stack = styled.div`
  width: 70%;
  color: ${theme.colors.titleColor};
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  text-align: justify;
`;

const ProjectLink = styled.a`
  color: ${theme.colors.projectTitleColor};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 26px;
  text-decoration-line: underline;
  &:hover {
    color: ${theme.colors.titleColor};
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ProjectCard: React.FC<ProjectCardType> = ({
  title,
  text,
  stackText,
  deployLink,
  gitLink,
  imgSrc,
}): JSX.Element => {
  return (
    <CardContainer>
      <ProjectImg src={imgSrc} />
      <TextContainer>
        <Title
          color={theme.colors.projectTitleColor}
          fontSize="18px"
          fontWeight="500"
          lineHeight="24px"
          marginBottom="15px"
        >
          {title}
        </Title>
        <Text
          color={theme.colors.linkColor}
          fontSize="14px"
          fontWeight="300"
          lineHeight="18px"
          marginBottom="10px"
          width="100%"
          textAlign="justify"
          height="145px"
        >
          {text}
        </Text>
        <Container width="100%" marginBottom="15px" height="58px">
          <TextBold>Tech Stack: </TextBold>
          <Stack>{stackText}</Stack>
        </Container>
        <Container width="100%">
          <Container width="45%">
            <Icon src={linkImg} alt="link-chain" />
            <ProjectLink href={deployLink}>Live Preview</ProjectLink>
          </Container>
          <Container width="45%">
            <Icon src={gitIcon} alt="git-icon" />
            <ProjectLink href={gitLink}>View Code</ProjectLink>
          </Container>
        </Container>
      </TextContainer>
    </CardContainer>
  );
};

export default ProjectCard;
