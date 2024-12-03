import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Menu from '../Menu/Menu.tsx';
import useIsMobile from '../../hooks/useIsMobile.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import * as P from './Header.parts.tsx';
import './Header.scss';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

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
          {t('header.title')}
        </P.Title>
      </P.TitleContainer>
    </>
  );
};

export default Header;
