import styled from "@emotion/styled";
import { IStylesProps } from "../Burger/types";
import { Link } from "react-scroll";
import { Colors, media } from "../../ui";

export const StyledNavigationSC = styled.nav<IStylesProps>`
  display: flex;
  justify-content: end;
  width: 100%;
  flex-direction: row;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 40px 0;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const LinksContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 40px;
  align-items: baseline;

  ${media.LAPTOP} {
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const ContainerRightSC = styled.div<IStylesProps>`
  background: ${Colors.TEXTDARK};
  opacity: 0.9;
  height: 100vh;
  display: none;
  flex-direction: column;
  padding: 60px 30px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background: ${Colors.TEXTDARK};
    opacity: 0.9;
  }

  ${media.PHONE} {
    width: 100%;
  }

  main {
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")}; // BUG
  }
`;

export const ContainerTopNavigationSC = styled.div`
  display: flex;
  width: 100%;

  ${media.LAPTOP} {
    display: none;
  }
`;

export const LinkSC = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  ${media.PHONE} {
    font-size: 12px;
    line-height: 16px;
  }
  padding-bottom: 4px;

  border-bottom: 2px solid transparent;
  color: ${Colors.TEXTLIGHT};
  cursor: pointer;
  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 2px solid ${Colors.SECONDARY};
  }
`;
