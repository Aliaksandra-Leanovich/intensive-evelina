import React from "react";
import {
  CircleSC,
  ContainerRatesSC,
  ContainerSC,
  ImageSC,
  ListItemSC,
  ListSC,
  RateSC,
  TitleSC,
  WrapperSC,
  ContainterImageSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import Picture1 from "../../assets/results.webp";
import { TypographyVariants } from "../../enums";

export const Results = () => {
  return (
    <WrapperSC id="results">
      <ContainerSC>
        <ContainterImageSC>
          <ImageSC imageUrl={Picture1} />
        </ContainterImageSC>
        <ContainerRatesSC>
          <Typography variant={TypographyVariants.h2} color={Colors.TEXTDARK}>
            Итоги интенсива
          </Typography>
          <RateSC>
            <TitleSC>
              <Typography
                variant={TypographyVariants.h4}
                color={Colors.TEXTDARK}
              >
                Что вас ждет спустя 2-ух недель интенсива?
              </Typography>
            </TitleSC>
            <ListSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  подтянется все тело
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  улучшение самочувствия и настроения
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  поднятие энергии и мотивации
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  улучшение внутреннего душевного состояния
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  будешь питаться вкусно, сбалансировано и без ограничений
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  выстроишь комфортный для себя режим дня
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  полезные привычки, которые помогают выйти на новую уровень
                  энергии
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <CircleSC />
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.SECONDARY}
                >
                  уйдет тревожность
                </Typography>
              </ListItemSC>
            </ListSC>
          </RateSC>
        </ContainerRatesSC>
      </ContainerSC>
    </WrapperSC>
  );
};
