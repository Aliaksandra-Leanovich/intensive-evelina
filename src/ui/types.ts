import { TypographyVariants } from "../enums";

export interface ITypography {
  color?: string;
  variant: TypographyVariants;
}

export interface TypographyProps extends ITypography {
  children?: React.ReactNode;
}
