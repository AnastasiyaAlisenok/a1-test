import styled from "styled-components";

type TitlePropsType = {
  color: string;
  fontSize: string;
  lineHeight: string;
  marginBottom: string;
  textAlign?: string;
  fontWeight?: string;
};

export const Title = styled.h3<TitlePropsType>`
  color: ${(props): string => props.color};
  font-family: Poppins;
  font-size: ${(props): string => props.fontSize};
  font-weight: ${(props): string => props.fontWeight || "700"};
  line-height: ${(props): string => props.lineHeight};
  letter-spacing: -0.4px;
  margin-bottom: ${(props): string => props.marginBottom};
  text-align: ${(props): string | undefined => props.textAlign};
`;
