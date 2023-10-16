import React from "react";
import styled from "styled-components";
import myPhoto from "../../../assets/img/myphoto.jpg";

const Photo = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 100px;
  border-radius: 230px;
  border: 9px solid #e70faa;
  background:
    url(${myPhoto}),
    lightgray 50% / cover no-repeat;
`;

export const GreetingPhoto = (): JSX.Element => {
  return <Photo />;
};
