import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 1.6fr 2fr;

  h2 {
    text-align: left;
  }

  ${media.TABLET} {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperSC = styled.div`
  background-color: ${Colors.PRIMARY};
`;

export const DescriptionSC = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 10px 100px 10px;

  ${media.TABLET} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    padding: 10px;
  }
`;

export const ImagesSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.TABLET} {
    width: 80%;
  }

  ${media.PHONE} {
    width: 100%;
  }
`;

export const ContainterImageSC = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;

export const DescriptionSecondSC = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 10px 100px 10px;

  ${media.TABLET} {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    padding: 10px;

    p {
      color: ${Colors.SECONDARY};
    }
  }
`;

export const TextSC = styled.div`
  max-width: 1000px;
  padding: 20px;
  width: 100%;

  p {
    font-weight: 300;
  }

  span {
    font-weight: 700;
  }
`;

export const PictureSC = styled.div`
  width: 20%;
`;

export const PicturesSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
`;

export const ListSC = styled.ul`
  list-style-type: none;
  padding: 10px 0 0 30px;

  ${media.LAPTOP} {
    padding: 10px 0 0 10px;
  }
`;

export const ListItemSC = styled.li`
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    background-color: ${Colors.SECONDARY};
    position: absolute;
    width: 8px;
    border-radius: 50%;
    height: 8px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
  }

  p {
    font-weight: 300;
  }
`;
