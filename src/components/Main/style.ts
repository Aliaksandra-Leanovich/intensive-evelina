import styled from "@emotion/styled";
import { Colors, media } from "../../ui";
import { Link } from "react-scroll";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  height: fit-content;
  padding: 56px 100px 106px 26px;

  ${media.LAPTOP} {
    column-gap: 0;
    row-gap: 20px;
    flex-direction: column;
    padding: 56px 100px 36px 26px;
  }

  ${media.TABLET} {
    padding: 56px 0 36px 0;
  }
`;

export const WrapperSC = styled.div`
  position: relative;
  background-color: ${Colors.PRIMARY};

  ${media.LAPTOP} {
    padding: 26px;
  }
`;

export const BackSC = styled.div`
  background-position: 100% 20%;
  top: 0;
  left: 0;
  z-index: 0;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  height: 650px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;

  ${media.LAPTOP} {
    height: 650px;
  }

  ${media.TABLET} {
    height: 400px;
  }

  ${media.PHONE} {
    height: 450px;
  }
`;

export const DescriptionSC = styled.div`
  padding-top: 166px;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 3;
  row-gap: 10px;

  p {
    font-weight: 300;
  }

  span {
    color: ${Colors.SECONDARY};
    font-weight: 700;
  }

  ${media.TABLET} {
    padding-top: 36px;
    row-gap: 10px;
    max-width: 100%;
  }
`;

export const ImageSC = styled.div`
  width: 60%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.TABLET} {
    width: 60%;
  }

  img {
    height: 700px;
    border-radius: 30px;
  }
`;

export const LinksContainerSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 30px;
  margin-top: 20px;

  ${media.TABLET} {
    column-gap: 10px;
  }
`;

export const LinkFirstSC = styled.a`
  max-width: 260px;
  color: ${Colors.SECONDARY};
  font-size: 20px;
  line-height: 1.55;
  font-weight: 700;
  border-width: 1px;
  border-radius: 40px;
  background-color: ${Colors.TEXTLIGHT};
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transition:
    background-color 0.4s ease-in-out,
    color 0.4s ease-in-out;
  width: 100%;
  display: block;
  text-align: center;
  padding: 10px 0;

  &:hover {
    background-color: ${Colors.SECONDARY};
    color: ${Colors.PRIMARY};
  }

  ${media.TABLET} {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    max-width: 160px;
  }
`;

export const LinkSecondSC = styled(Link)`
  max-width: 260px;
  color: ${Colors.SECONDARY};
  font-size: 20px;
  line-height: 1.55;
  font-weight: 700;
  border-width: 1px;
  border-radius: 30px;
  background-color: transparent;
  border: 3px solid ${Colors.PRIMARY};
  transition: border 0.4s ease-in-out;
  width: 100%;
  display: block;
  text-align: center;
  padding: 10px 0;
  text-transform: capitalize;

  &:hover {
    border: 3px solid ${Colors.SECONDARY};
  }

  ${media.TABLET} {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    max-width: 160px;
  }
`;
