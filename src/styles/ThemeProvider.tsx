import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import lightTheme from "./themes/lightTheme.ts";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({children}) => {
  return <Provider theme={lightTheme}>
    {children}
  </Provider>
}

export default ThemeProvider;