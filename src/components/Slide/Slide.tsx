import React from "react";
import { ContainerSlideSC, ImageContainerSC } from "./styles";

interface Testimonial {
  id: number;
  image: string;
}

export interface IPropsSlide {
  item: Testimonial;
}

export const Slide = ({ item }: IPropsSlide) => {
  return (
    <ContainerSlideSC>
      <ImageContainerSC key={item.id} className="testimonial-item">
        <img src={item.image} alt={item.id.toLocaleString()} />
      </ImageContainerSC>
    </ContainerSlideSC>
  );
};
