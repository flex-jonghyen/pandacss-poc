var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/Button.tsx
import { styled } from "@fubao/design-token/jsx";
var Button = styled("button", {
  base: {
    background: "red"
  },
  variants: {
    color: {
      primary: {
        background: "blue"
      },
      secondary: {
        background: "green"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

// src/Layout.tsx
import { Flex } from "@fubao/design-token/jsx";
import { jsx } from "react/jsx-runtime";
var Layout = /* @__PURE__ */ __name((props) => {
  return /* @__PURE__ */ jsx(Flex, { direction: "column", ...props });
}, "Layout");
export {
  Button,
  Layout
};
/*! For license information please see index.mjs.LEGAL.txt */
//# sourceMappingURL=index.mjs.map
