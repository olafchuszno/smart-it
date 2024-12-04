import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import SessionButtons from '../SessionButtons/SessionButtons.tsx';
import { ThemeToggle } from 'components/ThemeToggle';
import * as P from './NavLinks.parts.tsx';
import { useAuthContext } from 'contexts/AuthContext.tsx';
import { routesHeaderTranslationKeys } from 'constants/routesHeaderTranslationKeys.ts';
import headerLinks from 'constants/headerLinks.ts';
import './NavLinks.scss';

export const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  const navLinks = !user ? headerLinks.guest : headerLinks.user;

  return (
    <>
      {navLinks.map((header) => (
        <P.NavLink to={header.href} key={header.href}>
          {t(`headerLinks.${routesHeaderTranslationKeys[header.href as keyof typeof routesHeaderTranslationKeys]}`).toLocaleUpperCase()}
        </P.NavLink>
      ))}

      <P.SessionSettingsContainer>
        <LanguageMenu />

        <ThemeToggle />

        <SessionButtons />
      </P.SessionSettingsContainer>
    </>
  );
};

export default NavLinks;
