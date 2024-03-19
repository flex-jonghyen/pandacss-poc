"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Layout: () => Layout
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx = require("@fubao/design-token/jsx");
var Button = (0, import_jsx.styled)("button", {
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
var import_jsx2 = require("@fubao/design-token/jsx");
var import_jsx_runtime = require("react/jsx-runtime");
var Layout = /* @__PURE__ */ __name((props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx2.Flex, { direction: "column", ...props });
}, "Layout");
/*! For license information please see index.cjs.LEGAL.txt */
//# sourceMappingURL=index.cjs.map
