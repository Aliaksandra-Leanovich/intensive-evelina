import React from "react";
import {
  CircleSC,
  ContainerSC,
  LinksSC,
  ListItemSC,
  ListSC,
  RateSC,
  TextContainerSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";

export const Rates = () => {
  return (
    <WrapperSC id="rates">
      <ContainerSC>
        <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
          Тариф
        </Typography>
        <RateSC>
          <TitleSC>
            <Typography
              variant={TypographyVariants.paragraphLBold}
              color={Colors.SECONDARY}
            >
              Тариф Базовый
            </Typography>
          </TitleSC>

          <Typography
            variant={TypographyVariants.subtitle}
            color={Colors.TEXTDARK}
          >
            Интесив: 2 недели онлайн, где каждый день выходят подкасты/
            тренировки / лекции/ задания в 10:00 по мск
          </Typography>
          <ListSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>9</span> комплексов
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>5</span> лекций
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>9</span> подкастов
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>4</span> практики из коучинга и психологии, которые
                помогут вам понять себя и повысить самоценность
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                общий чат
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>ежедневный отчет</span> по выполнению заданий либо
                прослушиванию материалов в общем чата
              </Typography>
            </ListItemSC>
            <ListItemSC>
              <CircleSC />
              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.TEXTDARK}
              >
                <span>каждое воскресенье </span> - развернутая обратная связь на
                все вопросы
              </Typography>
            </ListItemSC>
          </ListSC>
          <TextContainerSC>
            <Typography
              variant={TypographyVariants.paragraphLBold}
              color={Colors.SECONDARY}
            >
              100BYN / 2700 RUB
            </Typography>
          </TextContainerSC>
          <LinksSC href="https://t.me/evi_skoblya"> Участвовать</LinksSC>
          <Typography
            variant={TypographyVariants.subtitle}
            color={Colors.TEXTDARK}
          >
            *после перехода напишите слово «хочу» и вам придет счет для оплаты
          </Typography>
        </RateSC>
      </ContainerSC>
    </WrapperSC>
  );
};
