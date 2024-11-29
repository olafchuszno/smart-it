import styled from 'styled-components';
import getIconSrc from '../../utils/getIconSrc.ts';

export const MenuButton = styled.button<{ $isProduction: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-image: ${({ $isProduction }) => getIconSrc('burger-menu.svg', $isProduction)};
  transition: 0.4s all ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-image: ${({ $isProduction }) => getIconSrc('burger-menu-hover.svg', $isProduction)};
    transition: 0.4s all ease;
  }

  &:focus {
    transform: translateX(5px);
    transition: 0.4s all ease;
  }
`;
