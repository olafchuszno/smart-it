import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Menu from '../Menu/Menu.tsx';
import useIsMobile from '../../hooks/useIsMobile.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import * as P from './Header.parts.tsx';
import './Header.scss';
import { useLocation } from 'react-router';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const location = useLocation();

  const currentPathname = useMemo(() => location.pathname.slice(1) || 'main', [location.pathname]);

  const headerTitle = useMemo(() => t(`headerTitle.${currentPathname}`), [currentPathname, t]);

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
          {headerTitle}
        </P.Title>
      </P.TitleContainer>
    </>
  );
};

export default Header;
