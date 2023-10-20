import React, { SetStateAction } from "react";
import styled from "styled-components";
import theme from "../../style/ThemeStyles";

interface NavLinkPropsType {
  text: string;
  url: string;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Item = styled.li`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Link = styled.a`
  font-family: "DM Sans";
  color: ${theme.colors.linkColor};
  font-size: ${theme.fontSize.link};
  &:hover {
    color: ${theme.colors.titleColor};
    border-bottom: 2px solid ${theme.colors.titleColor};
    transition: all 0.1s;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    color: ${theme.colors.bgColor};
    &:hover {
      color: ${theme.colors.bgColor};
      border-bottom: 2px solid ${theme.colors.bgColor};
      transition: all 0.1s;
    }
  }
`;

const NavLink: React.FC<NavLinkPropsType> = ({ text, url, setActive }) => {
  return (
    <Item>
      <Link href={url} onClick={(): void => setActive(false)}>
        {text}
      </Link>
    </Item>
  );
};

export default NavLink;
