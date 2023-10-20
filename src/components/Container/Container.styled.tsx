import styled from "styled-components";

type ContainerPropsType = {
  width: string;
  marginBottom?: string;
  height?: string;
  width1000?: string;
  flexDirection?: string;
  marginBottom1000?: string;
  flexDirection620?: string;
  width620?: string;
};

export const Container = styled.div<ContainerPropsType>`
  width: ${(props): string => props.width};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props): string | undefined => props.marginBottom};
  height: ${(props): string | undefined => props.height};
  @media (max-width: 1200px) {
    flex-direction: ${(props): string | undefined => props.flexDirection};
  }
  @media (max-width: 1000px) {
    width: ${(props): string => props.width1000 || props.width};
    margin-bottom: ${(props): string | undefined =>
      props.marginBottom1000 || props.marginBottom};
  }
  @media (max-width: 620px) {
    width: ${(props): string | undefined => props.width620 || props.width1000};
    flex-direction: ${(props): string | undefined => props.flexDirection620};
  }
`;
