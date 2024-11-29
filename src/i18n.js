import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'eng',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        welcome: 'hello world',
      },
    },
    pl: {
      translation: {
        welcome: 'cześć, świat',
      },
    },
  },
});

