import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import supportedLanguages from './constants/supportedLanguages.ts';

let userLanguage = window.localStorage.getItem('language');

if (!userLanguage || !Object.keys(supportedLanguages).includes(userLanguage)) {
  userLanguage = 'en';
}

i18next.use(initReactI18next).init({
  lng: userLanguage,
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        header: {
          title: 'User management table'
        },
        filters: {
          title: 'Filters',
        }
      },
    },
    pl: {
      translation: {
        header: {
          title: 'Tabela zarządzania użytkownikami'
        },
        filters: {
          title: 'Filtry',
        }
      },
    },
  },
});

