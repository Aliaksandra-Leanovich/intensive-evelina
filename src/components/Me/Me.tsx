import React from "react";
import {
  ContainerSC,
  ContainterImageSC,
  DescriptionSC,
  DescriptionSecondSC,
  ImagesSC,
  ListItemSC,
  ListSC,
  TextSC,
  WrapperSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";
import Picture1 from "../../assets/do1.webp";
import Picture2 from "../../assets/me.webp";
import Picture3 from "../../assets/do2.webp";

export const Me = () => {
  return (
    <WrapperSC id="me">
      <ContainerSC>
        <DescriptionSC>
          <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
            Кто я такая?
          </Typography>
          <TextSC>
            <Typography
              variant={TypographyVariants.paragraphS}
              color={Colors.TEXTDARK}
            >
              Я Эвелина - проработала и избавилась от РПП, наладила свое пищевое
              поведение, внедрила спорт, начала работать со своим внутренним
              состоянием и теперь, забота о себе, забота о своем
              психо-эмоциональной составляющей, сбалансированное питание без
              запретов и <span> активный образ жизни - это любовь </span> , а не
              наказание, а красивое тело в подарок!
            </Typography>
          </TextSC>
          <TextSC>
            <Typography
              variant={TypographyVariants.paragraphS}
              color={Colors.TEXTDARK}
            >
              Я знаю как это тяжело не принимать себя, как тяжело не смотреть на
              себя в зеркало, как тяжело заедать эмоции, жить с лишним весом,
              жить с постоянными мыслями, что я не карсивая, не худая, не
              счастливая! Знаю как это тяжело, когда вещи сидят не так и тяжело
              себя даже заставить что-либо делать. Знаю эти
              <span>
                “у меня не получается, я не могу, у меня нет мотивации, я не
                умею, у меня нет дисциплины, я не справлюсь”.
              </span>
            </Typography>
          </TextSC>
        </DescriptionSC>
        <ImagesSC>
          <ContainterImageSC>
            <picture>
              <source srcSet={Picture1} type="image/webp" />
              <img src={Picture1} alt="Description" />
            </picture>
          </ContainterImageSC>
          <ContainterImageSC>
            <picture>
              <source srcSet={Picture3} type="image/webp" />
              <img src={Picture3} alt="Description" />
            </picture>
          </ContainterImageSC>
        </ImagesSC>
      </ContainerSC>
      <ContainerSC>
        <ContainterImageSC>
          <picture>
            <source srcSet={Picture2} type="image/webp" />
            <img src={Picture2} alt="Description" />
          </picture>
        </ContainterImageSC>
        <DescriptionSecondSC>
          <TextSC>
            <Typography
              variant={TypographyVariants.paragraphS}
              color={Colors.TEXTDARK}
            >
              Я убеждена, что человек -
              <span> это душевное существо в материальном мире </span>
              поэтому важно уделять достаточно времени всем аспектам, а не
              только какому-то одному. Изменив себя я начала помогать таким же
              девушкам как я
            </Typography>
            <ListSC>
              <ListItemSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  сертифицированный нутрициолог, а также имею фитнес-образование
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  провела <span> 100+ </span> платных и бесплатных консультаций
                  в сфере питания
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  провела несколько небольших фитнес-курсов и после них около
                  <span> 40 </span> довольных клиентов
                </Typography>
              </ListItemSC>
              <ListItemSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.TEXTDARK}
                >
                  развиваюсь в сфере коучинга и психологии
                </Typography>
              </ListItemSC>
            </ListSC>
          </TextSC>
        </DescriptionSecondSC>
      </ContainerSC>
    </WrapperSC>
  );
};
