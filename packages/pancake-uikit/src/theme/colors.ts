import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffb400",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#d8600d",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#d8600d",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#b45d21",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d84a27",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #b45d21 0%, #d84a27 100%)",
    violet: "linear-gradient(180deg, #d88b27 0%, #d84a27 100%)",
    violetAlt: "linear-gradient(180deg, #d84a27 0%, #d84a27 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#d8600d",
  background: "#08060B",
  backgroundDisabled: "#383838",
  backgroundAlt: "#27262c",
  cardBorder: "#383838",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#b45d21",
  input: "##d84a27",
  inputSecondary: "#383838",
  primaryDark: "#0098A1",
  tertiary: "##d84a27",
  text: "#F4EEFF",
  textDisabled: "#ffb400",
  textSubtle: "#ffb400",
  disabled: "##d84a27",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #383838 0%, #d84a27 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #d84a27 0%, #383838 100%)",
    cardHeader: "linear-gradient(166.77deg, #383838 0%, #d84a27 100%)",
    blue: "linear-gradient(180deg, #d8600d 0%, #d8600d 100%)",
    violet: "linear-gradient(180deg, #d8600d 0%, ##d8600d 100%)",
    violetAlt: "linear-gradient(180deg, #383838 0%, #d8600d 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
