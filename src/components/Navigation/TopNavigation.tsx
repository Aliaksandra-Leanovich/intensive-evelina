import React from "react";
import { Navigation } from "./Navigation";
import { ContainerTopNavigationSC } from "./style";
import { INavigationProps } from "./type";

export const TopNavigation = ({ isOpen }: INavigationProps) => {
  return (
    <ContainerTopNavigationSC>
      <Navigation isOpen={isOpen} />
    </ContainerTopNavigationSC>
  );
};
