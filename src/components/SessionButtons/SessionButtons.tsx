import React from 'react';
import { useTranslation } from 'react-i18next';
import * as P from './SessionButtons.parts.tsx'
import { useAuthContext } from 'contexts/AuthContext.tsx';
import { routes } from 'constants/routes.ts';

const SessionButtons = () => {
  const { t } = useTranslation();

  // TODO add Sign out &/ register
  const { user } = useAuthContext();

  const sessionButtonAction = !user ? 'login' : 'logout';

  return (
    <P.SessionButton>
      <P.SessionLink to={routes[sessionButtonAction].href}>
        {t(`headerLinks.${sessionButtonAction}`)}
      </P.SessionLink>
    </P.SessionButton>
  );
};

export default SessionButtons;
