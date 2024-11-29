import React from 'react';
import { useTranslation } from 'react-i18next';

const SessionButtons = () => {
  const { t } = useTranslation();

  // TODO add Sign out &/ register
  const user = 0;

  const sessionButtonAction = !user ? 'login' : 'logout';

  return (
    <button>
      <a href={`/${sessionButtonAction}`}>
        {t(`headerLinks.${sessionButtonAction}`)}
      </a>
    </button>
  );
};

export default SessionButtons;
