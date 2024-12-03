import { NavLink as Link } from 'react-router';
import styled from 'styled-components';

export const MenuTopNavigation = styled.nav`
  box-sizing: border-box;
  height: calc(40px + (24px * 2));
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

  background-color: ${({ theme }) => theme.colors.backgrounds.DropdownMenu.one};

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

export const DropdownLink = styled(Link)`
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  transition: 0.4s all ease-in-out;
  border-radius: 8px;
  padding: 8px 0;
  width: 80%;
  display: block;

  color: ${({ theme }) => theme.colors.text.DropdownLink.two};

  &.active {
    color: ${({ theme }) => theme.colors.text.DropdownLink.one};
  }

  background-color: ${({ theme }) => theme.colors.backgrounds.DropdownLink.two};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.backgrounds.DropdownLink.one};

    color: ${({ theme }) => theme.colors.text.DropdownLink.one};

    transition: 0.4s all ease-in-out;
  }

  @media (min-width: 640px) {
    width: 60%;
  }
`;

export const MenuCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  padding: 0;
  border: none;

  background-color: transparent;
  cursor: pointer;
  transition: 0.4s all ease;

  &:hover {
    transform: rotate(90deg);
    transition: 0.4s all ease;
  }

  &:focus {
    transform: rotate(-180deg);
  }
`;

export const SettingButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
