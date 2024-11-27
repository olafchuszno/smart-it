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
      <P.Header>
        <P.Navigation>
          <LogoLink />

          {isMobile ? <Menu /> : <NavLinks />}
        </P.Navigation>
      </P.Header>

      <P.TitleContainer>
        <P.Title as='h1'>
          Tabela zarządzania użytkownikami:
        </P.Title>
      </P.TitleContainer>
    </>
  );
};

export default Header;
