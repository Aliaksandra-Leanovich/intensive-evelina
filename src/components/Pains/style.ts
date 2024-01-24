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
`;

export const WrapperSC = styled.div`
  padding: 56px 100px 56px 26px;
  background-color: ${Colors.PRIMARY};

  ${media.LAPTOP} {
    padding: 26px;
  }
`;

export const RateSC = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 26px;
  border-radius: 15px;
  background-color: ${Colors.TEXTLIGHT};
  border-style: solid;
  border: none;
`;

export const TitleSC = styled.div`
  margin-bottom: 8px;
`;

export const ListSC = styled.ul`
  list-style-type: none;
  padding: 10px 0 0 8px;
  p {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ListItemSC = styled.li`
  display: flex;

  span {
    font-weight: 700;
  }
`;

export const CircleSC = styled.div`
  margin-right: 20px;
  padding-top: 4px;
`;

export const ContainerRatesSC = styled.div`
  display: flex;
  width: 100%;
  column-gap: 30px;
  align-items: center;
  justify-content: center;

  ${media.TABLET} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
  }
`;

export const ImageSC = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 30px;

  ${media.TABLET} {
    max-width: 200px;
  }

  img {
    border-radius: 30px;
  }
`;
