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
  max-width: 400px;
  padding: 26px;
  border-radius: 15px;
  background-color: ${Colors.TEXTLIGHT};
`;

export const TitleSC = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

export const ListSC = styled.ul`
  list-style-type: none;
  padding: 10px 0 0 8px;
  margin-bottom: 20px;
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

export const LinksSC = styled.a`
  color: ${Colors.TEXTLIGHT};
  font-size: 20px;
  line-height: 1.55;
  font-weight: 700;
  border-width: 1px;
  border-radius: 15px;
  background-color: ${Colors.SECONDARY};
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transition: background-color 0.4s ease-in-out;
  width: 100%;
  display: block;
  text-align: center;
  padding: 10px 0;

  &:hover {
    background-color: ${Colors.TEXTDARK};
  }
`;

export const TextContainerSC = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
