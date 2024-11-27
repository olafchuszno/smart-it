import styled from 'styled-components';

export const MenuTopNavigation = styled.nav`
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
  box-sizing: border-box;
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
  gap: 20px;

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
  display: block;
  width: 100%;
`;

export const DropdownLink = styled.a`
  color: green;
  background-color: white;
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  transition: 0.4s all ease-in-out;
  border-radius: 8px;
  padding: 8px 0;
  width: 100%;
  display: block;

  &:hover {
    background-color: rgba(green, 0.15);
    transition: 0.4s all ease-in-out;
  }
`;

// TODO Change colors
