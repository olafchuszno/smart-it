import styled from "styled-components";
import { colors } from "styles/constants/colors";

// TODO change colors


export const NavLink = styled.a`
 font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  color: ${({theme}) => theme.colors.text.NavLinks.one};
  text-transform: uppercase;
  position: relative;
  transition-duration: 1s;
  transition-property: all;
  transition-timing-function: ease-in-out;

  &::after {
    content: '';
    width: 0px;
    height: 0px;
    padding: 1px 5px;
    position: absolute;
    top: -5px;
    left: 0;
    background-color: transparent;
    transition: all 0.4s ease-in-out;
  }
  
  &:hover {
    &::after {
      background-color: ${colors.green.main};
      transition: all 0.15s ease-in-out;
    }
  }
`

export const SessionSettingsContainer = styled.div`
  display: flex;
  gap: 14px;
`;