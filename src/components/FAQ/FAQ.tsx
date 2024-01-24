import { FAQAccordionProps } from "./types";
import { useHandleAccordion } from "../../hook/use-accordion.hook";
import ArrowIcon from "../../assets/icons/down-arrow.svg";
import {
  ContainerSC,
  FaqAnswerSC,
  FaqContainerSC,
  FaqItemSC,
  FaqNamesSC,
  WrapperSC,
} from "./styles";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const { activeIndices, toggleAccordion } = useHandleAccordion();

  return (
    <WrapperSC id="faq-section">
      <ContainerSC>
        <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
          А ТАКИЕ ВОПРОСЫ МОГУТ БЫТЬ У ВАС
        </Typography>
        <FaqContainerSC>
          {faqs.map((faq, index) => (
            <FaqItemSC key={index} className="faq-item">
              <FaqNamesSC
                className={`faq-question ${
                  activeIndices.includes(index) ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <p>{faq.question}</p>
                <div className="faq-arrow">
                  <img src={ArrowIcon} alt="arrow" />
                </div>
              </FaqNamesSC>
              {activeIndices.includes(index) && (
                <FaqAnswerSC isOpen={activeIndices.includes(index)}>
                  <Typography
                    variant={TypographyVariants.paragraphS}
                    color={Colors.TEXTDARK}
                  >
                    {faq.answer}
                  </Typography>
                </FaqAnswerSC>
              )}
            </FaqItemSC>
          ))}
        </FaqContainerSC>
      </ContainerSC>
    </WrapperSC>
  );
};

export default FAQAccordion;
