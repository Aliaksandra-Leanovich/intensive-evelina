import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

interface HeaderState {
  scrollY: number;
}

export const StyledHeaderSC = styled.header<HeaderState>`
  width: 100%;
  z-index: 5;
  position: fixed;
  background-attachment: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  background-color: rgba(0, 0, 0, ${(props) => (props.scrollY > 0 ? 0.8 : 0)});
  transition: background-color 0.3s ease;
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 26px 60px 16px 26px;
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTextSC = styled.div`
  max-width: 240px;
  width: 100%;
`;

export const LinkSC = styled.a`
  font-size: 14px;
  line-height: 18px;

  ${media.PHONE} {
    font-size: 12px;
    line-height: 16px;
  }
  padding-bottom: 4px;

  border-bottom: 2px solid transparent;
  color: ${Colors.PRIMARY};
  cursor: pointer;
  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 2px solid ${Colors.SECONDARY};
  }
`;
