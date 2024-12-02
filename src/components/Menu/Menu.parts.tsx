import styled from 'styled-components';

export const MenuButton = styled.button<{ $isProduction: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  transition: 0.4s all ease;
`;
