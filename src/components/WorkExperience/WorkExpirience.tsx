import React from "react";
import styled from "styled-components";
import { Container } from "../Container/Container.styled";
import { Text } from "../Text/Tegxt.styled";
import theme from "../../style/ThemeStyles";
import { Button } from "../Button/Button.styled";
import officeIcon from "../../assets/svg/building.svg";
import datesIcon from "../../assets/svg/calendar-dates.svg";

interface WorkExperienceType {
  speciality: string;
  place: string;
  dates: string;
}

const Icon = styled.img`
  width: 16px;
  height: 12px;
  display: block;
  margin-top: 7px;
`;

const WorkExperience: React.FC<WorkExperienceType> = ({
  speciality,
  place,
  dates,
}): JSX.Element => {
  return (
    <div>
      <Container width="100%">
        <Text
          color={theme.colors.linkColor}
          fontSize="18px"
          fontWeight="400"
          lineHeight="26px"
          marginBottom="0"
          width="70%"
        >
          {speciality}
        </Text>
        <Button>Full Time</Button>
      </Container>
      <Container width="100%" marginBottom="20px">
        <Container width="50%">
          <Icon src={officeIcon} alt="office=icon" />
          <Text
            color={theme.colors.lightColor}
            fontSize="12px"
            fontWeight="500"
            lineHeight="28px"
            marginBottom="0"
            width="90%"
          >
            {place}
          </Text>
        </Container>
        <Container width="25%">
          <Icon src={datesIcon} alt="calendar-dates=icon" />
          <Text
            color={theme.colors.lightColor}
            fontSize="12px"
            fontWeight="500"
            lineHeight="28px"
            marginBottom="0"
            width="95%"
            textAlign="right"
          >
            {dates}
          </Text>
        </Container>
      </Container>
    </div>
  );
};

export default WorkExperience;
