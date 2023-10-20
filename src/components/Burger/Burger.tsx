import React from "react";
import styled from "styled-components";
import theme from "../../style/ThemeStyles";

interface BurgerProps {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

type LinePropsType = {
  clicked: boolean;
};

const BurgerContainer = styled.button`
  position: relative;
  width: 36px;
  height: 28px;
  z-index: 10;
  background-color: inherit;
`;

const Line = styled.span<LinePropsType>`
  position: absolute;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: ${(props): string =>
    props.clicked ? "transparent" : theme.colors.titleColor};
  transition: all 0.3s;
  top: 17px;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    left: 0;
    position: absolute;
    display: inline-block;
    background-color: ${(props): string =>
      props.clicked ? theme.colors.bgColor : theme.colors.titleColor};
    transition: all 0.3s;
  }
  &::before {
    top: ${(props): string => (props.clicked ? "0" : "-1.2rem")};
    transform: ${(props): string =>
      props.clicked ? "rotate(135deg)" : "rotate(0)"};
  }
  &::after {
    top: ${(props): string => (props.clicked ? "0" : "1.2rem")};
    transform: ${(props): string =>
      props.clicked ? "rotate(-135deg)" : "rotate(0)"};
  }
`;

export const Burger: React.FC<BurgerProps> = ({
  click,
  setClick,
}): JSX.Element => {
  const handleClick = (): void => setClick(!click);
  return (
    <BurgerContainer type="button" onClick={handleClick}>
      <Line clicked={click} />
    </BurgerContainer>
  );
};
