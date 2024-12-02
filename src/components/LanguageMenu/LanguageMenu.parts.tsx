import styled from "styled-components";

export const LanguageMenu = styled.select`
  background-color: ${({theme}) => theme.colors.backgrounds.LanguageMenu.one};
  color: ${({ theme }) => theme.colors.text.LanguageMenu.one};
  max-height: 40px;
  display: flex;
  align-items: center;
`