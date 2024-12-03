import { Link } from "react-router";
import styled from "styled-components";

export const ImageLinkContainer = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const LogoImage = styled.img<{$isDarkMode: boolean}>`
  align-items: center;
  position: relative;
  bottom: ${({ $isDarkMode }) => $isDarkMode ? '5px' : '3.5px'};
  width: 100px;
  transform: ${({ $isDarkMode }) => $isDarkMode ? 'scale(1.3)' : 'scale(1)'};
`