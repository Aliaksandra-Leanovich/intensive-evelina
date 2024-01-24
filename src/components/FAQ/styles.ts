import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

interface FaqAnswerProps {
  isOpen: boolean;
}

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
    padding: 56px 26px 0 26px;
  }
`;

export const WrapperSC = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${Colors.PRIMARY};
`;

export const FaqContainerSC = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const FaqItemSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(14, 14, 15);
  pointer-events: auto;
  padding: 27px 30px;
`;

export const FaqNamesSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  color: ${Colors.TEXTDARK};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  ${media.PHONE} {
    font-size: 16px;
    line-height: 22px;
  }

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

export const FaqAnswerSC = styled.div<FaqAnswerProps>`
  padding: 10px 0 0 10px;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 1s ease-in-out;
`;
