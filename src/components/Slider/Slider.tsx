import React, { useRef } from "react";
import { ContainerSwiperSC, CustomSwiperSC } from "./style";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Slide } from "../Slide/Slide";

interface Testimonial {
  id: number;
  image: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const SliderReviews: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  const swiperRef = useRef<SwiperType>();

  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    1152: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  };

  return (
    <>
      <ContainerSwiperSC>
        <CustomSwiperSC
          slidesPerView={1}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          breakpoints={breakpoints}
          spaceBetween={56}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {testimonials.map((item: Testimonial) => (
            <SwiperSlide key={item.id}>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </CustomSwiperSC>
      </ContainerSwiperSC>
    </>
  );
};

export default SliderReviews;
