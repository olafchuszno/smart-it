import React from 'react';
import { useTranslation } from 'react-i18next';
import * as P from './SessionButtons.parts.tsx'
import { useAuthContext } from 'contexts/AuthContext.tsx';

const SessionButtons = () => {
  const { t } = useTranslation();

  // TODO add Sign out &/ register
  const { user } = useAuthContext();

  const sessionButtonAction = !user ? 'login' : 'logout';

  return (
    <P.SessionButton>
      <P.SessionLink to={`/${sessionButtonAction}`}>
        {t(`headerLinks.${sessionButtonAction}`)}
      </P.SessionLink>
    </P.SessionButton>
  );
};

export default SessionButtons;
