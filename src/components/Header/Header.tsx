import { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !(
        event.target instanceof Node && headerRef.current.contains(event.target)
      )
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledHeaderSC scrollY={scrollY}>
      <WrapperSC>
        <ContainerSC ref={headerRef}>
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
