import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components";
import AppStack from "./src/stack/AppStack";
import { tealTheme } from "./src/styles/AppTheme";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={tealTheme}>
      <AppStack />
    </ThemeProvider>
  );
}
