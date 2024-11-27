import React from 'react';
import headerLinks from '../../constants/HeaderLinks.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import * as P from './DropdownMenu.parts.tsx';
import './DropdownMenu.scss';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <P.DropdownMenuList>
      <P.MenuTopNavigation>
        <LogoLink />

        <button
          className="menu-close-button"
          onClick={() => {
            setIsMenuOpen(() => false);
          }}
        ></button>
      </P.MenuTopNavigation>

      {headerLinks.map((link) => {
        return (
          <P.DropdownMenuItem key={link.text}>
            <P.DropdownLink href={link.href}>{link.text}</P.DropdownLink>
          </P.DropdownMenuItem>
        );
      })}
    </P.DropdownMenuList>
  );
};

export default DropdownMenu;
