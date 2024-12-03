import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    overscroll-behavior: none;
    background-color: ${({ theme }) => theme.colors.backgrounds.App.one};
  }

  input:-internal-autofill-selected {
    background-color: unset !important;
  }

  input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px ${({theme}) => theme.colors.backgrounds.App.one} inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${({theme}) => theme.colors.text.GlobalStyles.one};
}

input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${({theme}) => theme.colors.backgrounds.App.one} inset;/*your box-shadow*/
    -webkit-text-fill-color: ${({theme}) => theme.colors.text.GlobalStyles.one};
} 

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
