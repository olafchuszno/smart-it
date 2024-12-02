import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    overscroll-behavior: none;
    background-color: ${({ theme }) => theme.colors.backgrounds.App.one};
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
