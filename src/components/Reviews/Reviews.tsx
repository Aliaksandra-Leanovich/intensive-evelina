import React from "react";
import SliderReviews from "../Slider/Slider";
import Review1 from "../../assets/review1.jpg";
import Review2 from "../../assets/review2.jpg";
import Review3 from "../../assets/review3.jpg";
import Review4 from "../../assets/review4.jpg";
import Review5 from "../../assets/review5.jpg";
import Review6 from "../../assets/review6.jpeg";
import Review7 from "../../assets/review7.jpeg";
import Review8 from "../../assets/review8.jpeg";
import Person1 from "../../assets/person1.jpeg";
import Person2 from "../../assets/person2.jpeg";
import Person3 from "../../assets/person3.jpeg";
import Person4 from "../../assets/person4.jpeg";
import { ContainerImagesSC, ContainerSC, ImagesSC, WrapperSC } from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";

const testimonialsData = [
  {
    id: 1,
    image: Review1,
  },
  {
    id: 2,
    image: Review3,
  },
  {
    id: 3,
    image: Review2,
  },

  {
    id: 4,
    image: Review4,
  },
  {
    id: 5,
    image: Review6,
  },
  {
    id: 6,
    image: Review5,
  },
  {
    id: 7,
    image: Review7,
  },
  {
    id: 8,
    image: Review8,
  },
];

const afterData = [
  {
    id: 1,
    image: Person1,
  },
  {
    id: 2,
    image: Person2,
  },
  {
    id: 3,
    image: Person3,
  },

  {
    id: 4,
    image: Person4,
  },
];

export const Reviews = () => {
  return (
    <WrapperSC id="reviews">
      <ContainerSC>
        <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
          Результаты клиентов
        </Typography>
        <Typography
          variant={TypographyVariants.paragraphLBold}
          color={Colors.TEXTDARK}
        >
          Отзывы клиентов
        </Typography>
        <SliderReviews testimonials={testimonialsData} />
        <Typography
          variant={TypographyVariants.paragraphLBold}
          color={Colors.TEXTDARK}
        >
          До/после клиентов
        </Typography>

        <ContainerImagesSC>
          {afterData.map((item) => (
            <ImagesSC key={item.id}>
              <img src={item.image} alt={item.id.toLocaleString()} />
            </ImagesSC>
          ))}
        </ContainerImagesSC>
      </ContainerSC>
    </WrapperSC>
  );
};
