import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title/Title.styled";
import theme from "../../style/ThemeStyles";
import { Text } from "../../components/Text/Text.styled";
import WorkExperience from "../../components/WorkExperience/WorkExpirience";

const AboutMe = styled.section`
  width: 70%;
  margin-top: 0;
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;

const AboutMeSection = (): JSX.Element => {
  return (
    <AboutMe id="about-me">
      <Title
        color={theme.colors.titleColor}
        fontSize={theme.fontSize.sectionTitle}
        lineHeight="52px"
        marginBottom="38px"
      >
        About Me
      </Title>
      <Text
        color={theme.colors.linkColor}
        fontSize={theme.fontSize.projectText}
        fontWeight="400"
        lineHeight="26px"
        marginBottom="5px"
        width="100%"
        textAlign="justify"
      >
        {`I'm 34 years old. I have already worked as a bank worker about 11 years.
        Last year I would like to learn new profession - front-end developer. I
        finished Rolling Scope school cources "JavaScript/Front-end" stage
        0,1,2. Now I learn React.`}
      </Text>
      <Text
        color={theme.colors.linkColor}
        fontSize={theme.fontSize.projectText}
        fontWeight="400"
        lineHeight="26px"
        marginBottom="38px"
        width="100%"
        textAlign="justify"
      >
        My strenghts are responsibility, the desire to get new knowledge and
        change my life. I can successfully work in a team.
      </Text>
      <Title
        color={theme.colors.titleColor}
        fontSize={theme.fontSize.sectionTitle}
        lineHeight="52px"
        marginBottom="38px"
      >
        Work Experience
      </Title>
      <WorkExperience
        speciality="Economist"
        place="OJSC Belagroprombank"
        dates="Feb 2012 - pr.time"
      />
      <Text
        color={theme.colors.lightColor}
        fontSize="1.2rem"
        fontWeight="500"
        lineHeight="16px"
        marginBottom="38px"
        width="100%"
      >
        I never work as front-end developer, but you can look at my projects and
        decide whether it’s worth hiring me for your job
      </Text>
      <Title
        color={theme.colors.titleColor}
        fontSize={theme.fontSize.sectionTitle}
        lineHeight="52px"
        marginBottom="38px"
      >
        Education
      </Title>
      <WorkExperience
        speciality="Banking"
        place="Belorussian state economic university"
        dates="Sep 2007 - May 2012"
      />
      <WorkExperience
        speciality="JavaScript/Front-end Pre-School"
        place="Rolling Scope School"
        dates="Dec 2022 - Feb 2023"
      />
      <WorkExperience
        speciality="JavaScript/Front-end"
        place="Rolling Scope School"
        dates="Mar 2023 - Sep 2023"
      />
      <WorkExperience
        speciality="React course"
        place="Rolling Scope School"
        dates="Oct 2023 - pr.time"
      />
    </AboutMe>
  );
};

export default AboutMeSection;
