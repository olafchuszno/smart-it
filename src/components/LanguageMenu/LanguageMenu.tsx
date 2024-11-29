import React from 'react';
import { useTranslation } from 'react-i18next';
import supportedLanguages from '../../constants/supportedLanguages.ts';

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const userLanguage = window.localStorage.getItem('language') || 'en';

  const allLanguages = Object.keys(supportedLanguages);

  const startingLanguage = allLanguages.includes(userLanguage)
    ? userLanguage
    : 'en';


  const handleLanguageChange = (event) => {
    const chosenLanguage = event.target.value;

    if (!allLanguages.includes(chosenLanguage)) {
      return;
    }

    i18n.changeLanguage(chosenLanguage);
    localStorage.setItem('language', chosenLanguage);
  };

  return (
    <select
      defaultValue={startingLanguage}
      onChange={handleLanguageChange}
      name="language"
    >
      {Object.keys(supportedLanguages).map((lang) => (
        <option key={lang} value={lang}>
          {supportedLanguages[lang].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageMenu;
