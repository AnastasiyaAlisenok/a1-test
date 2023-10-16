import styled from "styled-components";

type TextPropsType = {
  width: string;
  color: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  textAlign?: string;
  marginBottom: string;
};

export const Text = styled.p<TextPropsType>`
  width: ${(props): string => props.width};
  color: ${(props): string => props.color};
  font-family: Poppins;
  font-size: ${(props): string => props.fontSize};
  font-weight: ${(props): string => props.fontWeight};
  line-height: ${(props): string => props.lineHeight};
  text-align: ${(props): string => props.textAlign || "left"};
  margin-bottom: ${(props): string => props.marginBottom};
`;
