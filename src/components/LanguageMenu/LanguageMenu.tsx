import React from 'react';
import { useTranslation } from 'react-i18next';
import supportedLanguages, { LanguageKeys } from '../../constants/supportedLanguages.ts';
import * as P from './LanguageMenu.parts.tsx';

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const userLanguage = window.localStorage.getItem('language') || 'en';

  const allLanguages = Object.keys(supportedLanguages);

  const startingLanguage = allLanguages.includes(userLanguage)
    ? userLanguage
    : 'en';


  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenLanguage = event.target.value;

    if (!allLanguages.includes(chosenLanguage)) {
      return;
    }

    i18n.changeLanguage(chosenLanguage);
    localStorage.setItem('language', chosenLanguage);
  };

  return (
    <P.LanguageMenu
      defaultValue={startingLanguage}
      onChange={handleLanguageChange}
      name="language"
    >
      {(Object.keys(supportedLanguages) as LanguageKeys).map((lang) => (
        <option key={lang} value={lang}>
          {supportedLanguages[lang].nativeName}
        </option>
      ))}
    </P.LanguageMenu>
  );
};

export default LanguageMenu;
