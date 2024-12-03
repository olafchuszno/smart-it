import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import headerLinks from '../../constants/HeaderLinks.ts';
import SessionButtons from '../SessionButtons/SessionButtons.tsx';
import * as P from './NavLinks.parts.tsx';
import { ThemeToggle } from 'components/ThemeToggle';
import './NavLinks.scss';
import { useAuthContext } from 'contexts/AuthContext.tsx';

export const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  return (
    <>
      {headerLinks.map((header) => (
        <P.NavLink to={header.href} key={header.href}>
            {t(`headerLinks.${header.name}`).toLocaleUpperCase()}
        </P.NavLink>
      ))}

      {user && (
        <P.NavLink to={'/users-management'}>
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
