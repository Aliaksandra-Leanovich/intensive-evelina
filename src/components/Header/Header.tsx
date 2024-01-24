import { useEffect, useState } from "react";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import {
  ContainerSC,
  ContainerTextSC,
  LinkSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeaderSC scrollY={scrollY}>
      <WrapperSC>
        <ContainerSC>
          <ContainerTextSC>
            <LinkSC href="https://www.instagram.com/evi.skoblya?igsh=cGwzYWM1dWVzcHN3&utm_source=qr">
              @evi.skoblya
            </LinkSC>
          </ContainerTextSC>
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
