import styled from "styled-components";

type ContainerPropsType = {
  width: string;
  marginBottom?: string;
  height?: string;
};

export const Container = styled.div<ContainerPropsType>`
  width: ${(props): string => props.width};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props): string | undefined => props.marginBottom};
  height: ${(props): string | undefined => props.height};
`;
