import React from 'react';
import { useTranslation } from 'react-i18next';
import * as P from './SessionButtons.parts.tsx'

const SessionButtons = () => {
  const { t } = useTranslation();

  // TODO add Sign out &/ register
  const user = 0;

  const sessionButtonAction = !user ? 'login' : 'logout';

  return (
    <P.SessionButton>
      <P.SessionLink href={`/${sessionButtonAction}`}>
        {t(`headerLinks.${sessionButtonAction}`)}
      </P.SessionLink>
    </P.SessionButton>
  );
};

export default SessionButtons;
