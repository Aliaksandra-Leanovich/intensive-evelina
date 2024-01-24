import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { media } from "./media";
import { ITypography, TypographyProps } from "./types";

export const TypographyTypes = {
  h1: "h1" as const,
  h2: "h2" as const,
  h3: "h3" as const,
  h4: "h4" as const,
  paragraphS: "p" as const,
  paragraphSBold: "p" as const,
  paragraphM: "p" as const,
  paragraphMBold: "p" as const,
  paragraphL: "p" as const,
  paragraphLBold: "p" as const,
  subtitle: "p" as const,
  subtitleBold: "p" as const,
};

const variantTypography = {
  h1: css`
    font-weight: 700;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;

    ${media.TABLET} {
      font-size: 54px;
      line-height: 66px;
    }

    ${media.PHONE} {
      font-size: 36px;
      line-height: 44px;
    }
  `,

  h2: css`
    font-weight: 700;
    font-size: 50px;
    line-height: 66px;

    ${media.TABLET} {
      font-size: 30px;
      line-height: 34px;
    }

    ${media.PHONE} {
      font-size: 20px;
      line-height: 20px;
    }
  `,

  h3: css`
    font-weight: 300;
    font-size: 48px;
    line-height: 72px;
  `,

  h4: css`
    font-weight: 300;
    font-size: 36px;
    line-height: 56px;
  `,

  paragraphS: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    ${media.TABLET} {
      font-size: 14px;
      line-height: 18px;
    }

    ${media.PHONE} {
      font-size: 14px;
      line-height: 16px;
    }
  `,

  paragraphSBold: css`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    ${media.TABLET} {
      font-size: 14px;
      line-height: 18px;
    }

    ${media.PHONE} {
      font-size: 14px;
      line-height: 16px;
    }
  `,

  paragraphM: css`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  `,

  paragraphMBold: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  `,

  paragraphL: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    ${media.PHONE} {
      font-size: 16px;
      line-height: 22px;
    }
  `,

  paragraphLBold: css`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    ${media.PHONE} {
      font-size: 16px;
      line-height: 22px;
    }
  `,

  subtitle: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    ${media.PHONE} {
      font-size: 12px;
      line-height: 16px;
    }
  `,

  subtitleBold: css`
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    ${media.PHONE} {
      font-size: 12px;
      line-height: 16px;
    }
  `,
};

export const TypographyRoot = styled("p")<ITypography>`
  ${({ variant }) => variantTypography[variant]}
  color: ${({ color }) => color};
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  children,
}) => {
  const Component = variant ? TypographyTypes[variant] : "p";

  return (
    <TypographyRoot as={Component} color={color} variant={variant}>
      {children}
    </TypographyRoot>
  );
};
