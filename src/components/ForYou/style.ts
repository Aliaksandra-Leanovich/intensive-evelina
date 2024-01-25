import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  flex-direction: row;

  h2 {
    text-align: left;
  }

  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const WrapperSC = styled.div`
  background-color: ${Colors.TEXTLIGHT};
`;

export const RateSC = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  p {
    font-weight: 400;
  }

  span {
    font-weight: 700;
    color: ${Colors.SECONDARY};
  }

  ${media.PHONE} {
    width: 100%;
    row-gap: 10px;

    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const ContainerRatesSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${media.TABLET} {
    width: 80%;
    padding: 10px;
  }
`;

export const ContainterImageSC = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;
