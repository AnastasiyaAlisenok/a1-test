import React, { SetStateAction } from "react";
import { styled } from "styled-components";
import NavLink from "../Link/NavLink";

interface NavListProps {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

type NavPropsType = {
  active: boolean;
};

export const Nav = styled.nav<NavPropsType>`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-right: 31px;
  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    width: 60%;
    height: 100vh;
    margin: 0;
    background-color: #363535;
    opacity: 0.9;
    z-index: 9;
    transition: all 0.7s;
    transform: ${(props): string =>
      props.active ? "translateX(0%)" : "translateX(200%)"};
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 456px) {
    width: 100%;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;

const NavList: React.FC<NavListProps> = ({
  active,
  setActive,
}): JSX.Element => {
  return (
    <Nav active={active}>
      <List>
        <NavLink text="Home" url="#" setActive={setActive} />
        <NavLink text="About" url="#about-me" setActive={setActive} />
        <NavLink text="Tech Stack" url="#tech-stack" setActive={setActive} />
        <NavLink text="Projects" url="#projects" setActive={setActive} />
        <NavLink text="Contacts" url="#contacts" setActive={setActive} />
      </List>
    </Nav>
  );
};

export default NavList;
