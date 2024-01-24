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

  ${media.LAPTOP} {
    padding: 26px 6px;
  }
`;

export const ContainerTableSC = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 20px;
    align-self: center;
    text-align: center;
  }

  ${media.TABLET} {
    display: none;
  }
`;

export const RowSC = styled.div`
  display: flex;
`;

export const DateCeilSC = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  background-color: ${Colors.TEXTLIGHT};
  justify-content: center;
  padding: 2px;
  font-family: "Futura", Futura, sans-serif;
  font-weight: 400;
`;

export const CeilSC = styled.div`
  width: 100%;
  height: 180px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  padding: 4px;
  row-gap: 4px;
  background-color: ${Colors.TEXTLIGHT};
  align-items: end;

  ${media.PHONE} {
    height: 340px;
  }

  p {
    margin: 0;
    align-self: end;
    color: #706f6f;
  }

  span {
    color: #b0b5b3;
  }
`;

export const TaskSC = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 4px solid ${Colors.SECONDARY};
  background-color: ${Colors.PRIMARY};
  border-radius: 5%;
  font-size: 8px;
  padding: 4px;
  font-family: "Futura", Futura, sans-serif;
  font-weight: 400;

  ${media.PHONE} {
    font-size: 6px;
  }
`;
