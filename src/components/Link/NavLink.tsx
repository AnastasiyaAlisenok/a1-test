import React from "react";
import styled from "styled-components";
import theme from "../../style/ThemeStyles";

interface NavLinkPropsType {
  text: string;
  url: string;
}

const Link = styled.a`
  font-family: "DM Sans";
  color: ${theme.colors.linkColor};
  font-size: ${theme.fontSize.link};
  &:hover {
    color: ${theme.colors.titleColor};
    border-bottom: 2px solid ${theme.colors.titleColor};
  }
`;

const NavLink: React.FC<NavLinkPropsType> = ({ text, url }) => {
  return (
    <li>
      <Link href={url}>{text}</Link>
    </li>
  );
};

export default NavLink;
