import React from "react";
import {
  ContainerRatesSC,
  ContainerSC,
  ContainterImageSC,
  RateSC,
  WrapperSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";
import Picture1 from "../../assets/faq.webp";

export const ForYou = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <ContainerRatesSC>
          <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
            Кому подойдет этот интенсив?
          </Typography>
          <RateSC>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              1. Если ты хочешь <span>похудеть и наладить питание</span>
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              2. Если у тебя огромная
              <span> тревожность из-за питания и тренировок </span>, постоянно
              боишься сделать что-то нет, только бы не поправиться и не
              откатиться назад
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              3. Если ты
              <span> находишься в депрессивном и апатичном состоянии. </span>
              Считаешь себя слабой для новых достижений.
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              4. Ты <span> не любишь себя</span>, не чувствуешь себя женственной
              и считаешь себя недостаточно хорошей для другой жизни
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              5. Ты устала откладывать свою лучшую жизнь на завтра и
              <span> жить в недостатке энергии</span>
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              6. Ты <span> не имеешь четкой стратегии</span> в действиях, у тебя
              нет системы и твоих личных ритуалов. Нет плана в работе с телом
            </Typography>
            <Typography
              variant={TypographyVariants.paragraphM}
              color={Colors.TEXTDARK}
            >
              7. Если ты <span> хочешь здоровое тело</span>, хорошее настроение,
              улучшение эмоциональной составляющей и состояние легкости
            </Typography>
          </RateSC>
        </ContainerRatesSC>
        <ContainterImageSC>
          <picture>
            <source srcSet={Picture1} type="image/webp" />
            <img src={Picture1} alt="Description" />
          </picture>
        </ContainterImageSC>
      </ContainerSC>
    </WrapperSC>
  );
};
