import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import headerLinks from '../../constants/HeaderLinks.ts';
import SessionButtons from '../SessionButtons/SessionButtons.tsx';
import * as P from './NavLinks.parts.tsx';
import './NavLinks.scss';
import { ThemeToggle } from 'components/ThemeToggle';

export const NavLinks: React.FC = () => {
  const { t } = useTranslation();

  const user = 1;

  return (
    <>
      {headerLinks.map((header) => (
        <P.NavLink key={header} href={header}>
          {t(`headerLinks.${header}`).toLocaleUpperCase()}
        </P.NavLink>
      ))}

      {user && (
        <P.NavLink href={'/users'}>
          {t('headerLinks.userManagement').toLocaleUpperCase()}
        </P.NavLink>
      )}

      <P.SessionSettingsContainer>
        <LanguageMenu />

        <ThemeToggle />

        <SessionButtons />
      </P.SessionSettingsContainer>
    </>
  );
};

export default NavLinks;
