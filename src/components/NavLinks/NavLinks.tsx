import React from 'react';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import styled from 'styled-components';
import headerLinks from '../../constants/HeaderLinks.ts';
import { useTranslation } from 'react-i18next';
import * as P from './NavLinks.parts.tsx';
import './NavLinks.scss';

const SessionButtons = () => {
  const { t } = useTranslation();

  // TODO add Sign out &/ register

  return <span>
    <button onClick={() => {}}>{t('headerLinks.logIn')}</button>
  </span>
}

const SessionSettingsContainer = styled.div`
  display: flex;
  gap: 14px;
`

export const NavLinks: React.FC = () => {
  const { t } = useTranslation();

  const user = null;

  return (
    <>
      {headerLinks.map((header) => (
        <P.NavLink key={header} href={header}>{t(`headerLinks.${header}`).toLocaleUpperCase()}</P.NavLink>
      ))}

      {user && <P.NavLink href={'/users'}>{t('headerLinks.userManagement').toLocaleUpperCase()}</P.NavLink>}

      <SessionSettingsContainer>
        <SessionButtons />
        <LanguageMenu />
      </SessionSettingsContainer>
    </>
  );
};

export default NavLinks;
