import React from 'react';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Menu from '../Menu/Menu.tsx';
import useIsMobile from '../../hooks/isMobile.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import * as P from './Header.parts.tsx';
import './Header.scss';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <header className="header">
        <nav className="header-navbar header__navbar">
          <LogoLink />

          {isMobile ? <Menu /> : <NavLinks />}
        </nav>
      </header>
      <P.TitleContainer>
        <P.Title as='h1'>
          Tabela zarządzania użytkownikami:
        </P.Title>
      </P.TitleContainer>
    </>
  );
};

export default Header;