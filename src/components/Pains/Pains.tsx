import React from "react";
import {
  CircleSC,
  ContainerRatesSC,
  ContainerSC,
  ListItemSC,
  ListSC,
  RateSC,
  TitleSC,
  WrapperSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";

export const Pains = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <ContainerRatesSC>
          <RateSC>
            <TitleSC>
              <Typography
                variant={TypographyVariants.paragraphLBold}
                color={Colors.TEXTDARK}
              >
                Если ты переживаешь, что:
              </Typography>
            </TitleSC>
            <ListSC>
              <ListItemSC>
                <CircleSC> 💸</CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  надо <span> покупать абонемент и платить за тренера</span> -
                  домашние тренировки, которые не требуют оплаты тренера и зала,
                  а также не требуют инвентаря
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>🍩 </CircleSC>

                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  надо <span> ходить голодным и не есть любимые продукты </span>{" "}
                  - научишься грамотно выстраивать свой рацион, чтобы избавиться
                  от ограничений и запретов, при этом вписываю все любимые
                  продукты в рацион
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>🫣 </CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  это <span>нудно, однотипно и неинтересно </span> - разные виды
                  комплексов, преимущественно с элементами Энимал Флоу, которые
                  дают неординарные и не базовые движения твоему телу
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>🏃‍♀️ </CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  мне кажется, что мне ничего не поможет потому что у меня
                  <span> не хватает мотивации и дисциплины </span> - дисциплина
                  - это навык, который мы с вами будем учиться вырабатывать.
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>⏰</CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  надо выделять много времени - лекции и подкасты можно слушать
                  в любое время суток, а комплексы занимают
                  <span> не более 25 минут </span> в день (от 10 до 25 минут)
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>✉️ </CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  можно легко слиться - будет чат, где можно делиться всеми
                  проблемами, трудностями и обратиться за советом или просто
                  выговориться
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC>🫶</CircleSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  не факт, что у меня получится вообще - я сделаю все так, чтобы
                  получилось
                </Typography>
              </ListItemSC>
            </ListSC>
          </RateSC>
        </ContainerRatesSC>
      </ContainerSC>
    </WrapperSC>
  );
};
