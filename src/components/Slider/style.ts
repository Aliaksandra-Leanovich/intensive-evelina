import styled from "@emotion/styled";
import { Colors, media } from "../../ui";
import { Swiper } from "swiper/react";

export const CustomSwiperSC = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${Colors.SECONDARY};
  }
`;

export const ContainerSwiperSC = styled.div`
  width: 100%;
  position: relative;

  ${media.TABLET} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerSlideSC = styled.div`
  max-width: 378px;
  width: 100%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  row-gap: 98px;
  position: relative;
`;
