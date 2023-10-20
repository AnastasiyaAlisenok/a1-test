import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title.styled";
import theme from "../../style/ThemeStyles";
import ProjectCard from "../../components/Projectcard/Projectcard";
import { projectsList } from "./ProjectsList";

const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 184px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;

const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  justify-content: space-evenly;
`;

const ProjectsSection = (): JSX.Element => {
  return (
    <SectionContainer id="projects">
      <Title
        color={theme.colors.titleColor}
        fontSize={theme.fontSize.sectionTitle}
        lineHeight="26px"
        marginBottom="49px"
        textAlign="center"
      >
        Projects
      </Title>
      <Title
        color={theme.colors.linkColor}
        fontSize={theme.fontSize.sectionSubTitle}
        lineHeight="26px"
        marginBottom="110px"
        textAlign="center"
        fontWeight="400"
      >
        Things I’ve built so far
      </Title>
      <Projects>
        {projectsList.map((project) => (
          <ProjectCard
            title={project.title}
            stackText={project.stackText}
            imgSrc={project.imgSrc}
            deployLink={project.deployLink}
            gitLink={project.gitLink}
            text={project.text}
          />
        ))}
      </Projects>
    </SectionContainer>
  );
};

export default ProjectsSection;
