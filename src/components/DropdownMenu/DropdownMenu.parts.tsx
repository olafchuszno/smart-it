import styled from 'styled-components';

// TODO - Implement dynamic colors with Theme

export const MenuTopNavigation = styled.nav`
  height: 40px;
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

export const DropdownLink = styled.a<{ $isActive?: boolean }>`
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  transition: 0.4s all ease-in-out;
  border-radius: 8px;
  padding: 8px 0;
  width: 80%;
  display: block;

  color: ${({ $isActive, theme }) =>
    $isActive
      ? theme.colors.text.DropdownLink.one
      : theme.colors.text.DropdownLink.two};
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

export const MenuCloseButton = styled.button<{ $isProduction: boolean }>`
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
