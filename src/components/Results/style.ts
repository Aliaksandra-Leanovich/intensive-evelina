import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  h2 {
    text-align: left;
  }

  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    h2,
    h4 {
      color: ${Colors.TEXTLIGHT};
    }
  }
`;

export const WrapperSC = styled.div`
  background-color: ${Colors.TEXTLIGHT};
`;

export const RateSC = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 26px;

  ${media.TABLET} {
    max-width: 100%;
  }

  ${media.PHONE} {
    padding: 0;
  }
`;

export const TitleSC = styled.div`
  margin-bottom: 8px;

  ${media.TABLET} {
    margin: 0;

    h4 {
      line-height: 42px;
    }
  }
`;

export const ListSC = styled.ul`
  list-style-type: none;
  padding: 10px 0 0 8px;
`;

export const ListItemSC = styled.li`
  display: flex;

  span {
    font-weight: 700;
  }
`;

export const CircleSC = styled.div`
  background-color: ${Colors.SECONDARY};
  width: 8px;
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 50%;
  padding: 4px;
  height: 8px;
`;

export const ContainerRatesSC = styled.div`
  display: flex;
  column-gap: 120px;
  flex-direction: column;
  padding-left: 10px;
  text-align: left;

  ${media.TABLET} {
    position: absolute;
    display: flex;
    padding: 26px;
  }

  ${media.PHONE} {
    row-gap: 0;
    padding: 10px;
  }
`;

export const ContainterImageSC = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

interface BackSCProps {
  imageUrl: string;
}

export const ImageSC = styled.div<BackSCProps>`
  padding-top: 76px;
  height: 100%;
  position: absolute;
  background-image: url(${(props) => props.imageUrl});
  background-position: 100% 40%;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 0;
  margin: 0 auto;
  width: 100%;

  ${media.TABLET} {
    position: relative;
    background-position: 70% 40%;
    height: 800px;
  }

  ${media.PHONE} {
    height: 800px;
  }
`;
