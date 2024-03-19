import { styled } from "@fubao/design-token/jsx";

export const Button = styled("button", {
  base: {
    background: "red",
  },
  variants: {
    color: {
      primary: {
        background: "blue",
      },
      secondary: {
        background: "green",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
