import baseStyled, {
  ReactNativeStyledInterface,
} from "styled-components/native";

export const tealTheme = {
  primary: "rgba(0, 128, 128, 1)",
  secondary: "white",
  primaryText: "white",
  secondaryText: "black",
  background: "rgba(0,0,0,0.9)",
};

type ThemeType  = typeof tealTheme;



export const styledWithTheme = baseStyled as unknown as ReactNativeStyledInterface<ThemeType>;
