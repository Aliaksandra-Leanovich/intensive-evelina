import React from "react";
import {
  ContainerSC,
  WrapperSC,
  DescriptionSC,
  LinksContainerSC,
  LinkFirstSC,
  LinkSecondSC,
  BackSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";
import Picture from "../../assets/newone.jpg";
import { Header } from "../Header";

export const Main = () => {
  return (
    <WrapperSC id="main">
      <Header />
      <ContainerSC>
        <BackSC>
          <embed src={Picture} width="100%" />
        </BackSC>
        <DescriptionSC>
          <Typography
            variant={TypographyVariants.paragraphLBold}
            color={Colors.SECONDARY}
          >
            АВТОРСКИЙ ИНТЕНСИВ
          </Typography>
          <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
            ПО ИЗМЕНЕНИЮ <br /> ОБРАЗА ЖИЗНИ
          </Typography>

          <Typography
            variant={TypographyVariants.paragraphS}
            color={Colors.TEXTLIGHT}
          >
            Хочешь узнать, как улучшить свое тело и состояние через любовь, не
            выпадая из других сфер жизни? Тогда жду на интенсиве
            <span> 5 февраля</span>
          </Typography>

          <LinksContainerSC>
            <LinkFirstSC href="https://t.me/evi_skoblya">
              Участвовать
            </LinkFirstSC>
            <LinkSecondSC to="programm" smooth={true} duration={500}>
              Программа
            </LinkSecondSC>
          </LinksContainerSC>
        </DescriptionSC>
      </ContainerSC>
    </WrapperSC>
  );
};
