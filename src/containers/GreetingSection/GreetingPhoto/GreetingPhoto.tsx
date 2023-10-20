import React from "react";
import styled from "styled-components";
import myPhoto from "../../../assets/img/myphoto.jpg";

const Photo = styled.div`
  width: 30rem;
  height: 30rem;
  margin-top: 180px;
  border-radius: 23rem;
  border: 9px solid #e70faa;
  background:
    url(${myPhoto}),
    lightgray 50% / cover no-repeat;
  @media (max-width: 1200px) {
    width: 35rem;
    height: 35rem;
    margin: 0 auto;
    margin-top: 100px;
  }
`;

export const GreetingPhoto = (): JSX.Element => {
  return <Photo />;
};
