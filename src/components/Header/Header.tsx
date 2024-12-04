import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import NavLinks from '../NavLinks/NavLinks.tsx';
import Menu from '../Menu/Menu.tsx';
import useIsMobile from '../../hooks/useIsMobile.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import * as P from './Header.parts.tsx';
import './Header.scss';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const location = useLocation();

  const headerTitle = useMemo(() => {
    // Get pathname from the url
    const currentPathname = location.pathname.slice(10) || 'main';

    // Get translated header title based on the current path
    return t(`headerTitle.${currentPathname}`);
  }, [location.pathname, t]);

  return (
    <>
      <P.Header>
        <P.Navigation>
          <LogoLink />

          {isMobile ? <Menu /> : <NavLinks />}
        </P.Navigation>
      </P.Header>

      <P.TitleContainer>
        <P.Title as="h1">{headerTitle}</P.Title>
      </P.TitleContainer>
    </>
  );
};

export default Header;
