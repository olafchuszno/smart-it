import styled from 'styled-components';
import developmentUrlHeading from '../../constants/developmentUrlHeading.ts';

export const MenuButton = styled.button<{ $isProduction: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-image: ${({ $isProduction }) =>
    $isProduction
      ? `url('/icons/burger-menu.svg')`
      : `url(${developmentUrlHeading}/icons/burger-menu.svg)`};
  transition: 0.4s all ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-image: ${({ $isProduction }) =>
      $isProduction
        ? `url('/icons/burger-menu-hover.svg')`
        : `url(${developmentUrlHeading}/icons/burger-menu-hover.svg)`};
    transition: 0.4s all ease;
  }

  &:focus {
    transform: translateX(5px);
    transition: 0.4s all ease;
  }
`;
