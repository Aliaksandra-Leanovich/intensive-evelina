import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 56px 100px 0 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;

  h2 {
    text-align: center;
  }

  ${media.LAPTOP} {
    padding: 0 26px;
  }
`;

export const WrapperSC = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${Colors.PRIMARY};
  display: none;

  ${media.TABLET} {
    display: flex;
  }
`;

export const DatesContainerSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  column-gap: 20px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const DateBlockWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
`;

export const DateText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(14, 14, 15);
  pointer-events: auto;
  padding: 14px 0;

  .faq-arrow {
    height: fit-content;
    width: 18px;
    transition: transform 0.3s ease;
  }

  &.active .faq-arrow {
    transform: rotate(180deg);
  }

  .active {
    transition: max-height 1s ease-in-out;
  }
`;

export const TasksList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6px;
  border: none;
`;

export const TaskItem = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 4px solid ${Colors.SECONDARY};
  background-color: ${Colors.TEXTLIGHT};
  border-radius: 5%;
  font-size: 12px;
  padding: 4px;
  font-family: "Futura", Futura, sans-serif;
  font-weight: 400;
`;
