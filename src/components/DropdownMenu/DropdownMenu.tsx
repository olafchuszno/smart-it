import React, { useContext } from 'react';
import headerLinks from '../../constants/HeaderLinks.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import { ProductionEnvironmentContext } from '../EnvironmentProvider.tsx';
import * as P from './DropdownMenu.parts.tsx';
import './DropdownMenu.scss';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const isProduction = useContext(ProductionEnvironmentContext);

  return (
    <P.DropdownMenuList>
      <P.MenuTopNavigation>
        <LogoLink />

        <P.MenuCloseButton
          $isProduction={isProduction}
          onClick={() => {
            setIsMenuOpen(() => false);
          }}
        ></P.MenuCloseButton>
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
