import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#EBA100",
  primaryBright: "#FAD126",
  primaryDark: "#FAD136",
  secondary: "#EBA000",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#010101",
  textDisabled: "#BDC2C4",
  textSubtle: "#020202",
  borderColor: "#EBA000",
  card: "#FBFBFB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FAD126 0%, #FF564E 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#EBA000",
  background: "#000000",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#FAD136",
  tertiary: "#353547",
  text: "#FFFFFE",
  textDisabled: "#666171",
  textSubtle: "#FFFFFA",
  borderColor: "#524B63",
  card: "#00000F",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FAD126 0%, #FF564E 100%)",
  },
};
