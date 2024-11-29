import styled from 'styled-components';
import getIconSrc from '../../utils/getIconSrc.ts';

// TODO - Implement dynamic colors with Theme

export const MenuTopNavigation = styled.nav`
  box-sizing: border-box;
  height: 42.5px;
  max-width: 600px;

  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;

  transition: 0.1s all ease;

  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const DropdownMenuList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  padding: 0;
  margin: 0;
  box-sizing: border-box;

  background-color: white;

  overflow: hidden;

  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const DropdownMenuItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const DropdownLink = styled.a<{$isActive?: boolean}>`
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  transition: 0.4s all ease-in-out;
  border-radius: 8px;
  padding: 8px 0;
  width: 80%;
  display: block;
  
  color: ${({$isActive}) => $isActive ? 'white' : 'rgb(134, 191, 43)'};
  background-color: ${({$isActive}) => $isActive ? 'rgb(134, 191, 43)' : 'transparent'};

  &:hover {
    background-color: #86bf2b26;
    color: green;
    transition: 0.4s all ease-in-out;
  }

  @media (min-width: 640px) {
    width: 60%;
  }
`;

export const MenuCloseButton = styled.button<{$isProduction: boolean}>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-image: ${({ $isProduction }) => getIconSrc('close-x.svg', $isProduction)};
  transition: 0.4s all ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: rotate(90deg);
    transition: 0.4s all ease;
  }

  &:focus {
    transform: rotate(-180deg);
  }
`
