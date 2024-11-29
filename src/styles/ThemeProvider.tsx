// import React, { useState } from "react";
// import { DefaultTheme, ThemeProvider as Provider } from "styled-components";
// import darkTheme from "./themes/darkTheme";
// import lightTheme from "./themes/lightTheme";

// interface Props {
//   children: React.ReactNode;
// }

// const ThemeProvider: React.FC<Props> = ({ children }) => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   const isDarkTheme = theme === 'dark';

//   const currentTheme = isDarkTheme ? darkTheme : lightTheme;

//   const toggleTheme = () => {
//     setTheme(isDarkTheme ? 'light' : 'dark');
//   }

//   return <Provider theme={currentTheme}>
//     {children}
//   </Provider>
// }

// export default ThemeProvider;