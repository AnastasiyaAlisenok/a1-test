import React from "react";
import styled from "styled-components";

interface ContactPropsType {
  path: string;
  image: string;
  alt: string;
}

const SocialLink = styled.a`
  &:hover {
    transform: scale(1.2);
    transition: all.3s;
  }
`;

export const Contact: React.FC<ContactPropsType> = ({
  path,
  image,
  alt,
}): JSX.Element => {
  return (
    <SocialLink href={path}>
      <img src={image} width="25" height="25" alt={alt} />
    </SocialLink>
  );
};
