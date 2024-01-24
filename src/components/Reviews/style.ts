import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;

  h2 {
    text-align: center;
  }

  p {
    align-self: flex-start;
  }
`;

export const WrapperSC = styled.div`
  padding: 56px 100px 56px 26px;
  background-color: ${Colors.TEXTLIGHT};

  ${media.LAPTOP} {
    padding: 26px;
  }
`;

export const ContainerImagesSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  align-items: center;
  justify-content: center;

  ${media.LAPTOP} {
    row-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImagesSC = styled.div`
  width: 100%;
`;
