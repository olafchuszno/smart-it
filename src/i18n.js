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
          title: 'User management table',
        },
        filtersSection: {
          title: 'Filters',
          foundMessage: 'Found',
        },
        filters: {
          name: {
            header: 'name',
            placeholder: 'John Doe',
          },
          username: {
            header: 'username',
            placeholder: 'john_doe123',
          },
          email: {
            header: 'email',
            placeholder: 'john.doe@gmail.com',
          },
          phone: {
            header: 'phone',
            placeholder: '010-692-6593',
          },
        },
      },
    },
    pl: {
      translation: {
        header: {
          title: 'Tabela zarządzania użytkownikami',
        },
        filtersSection: {
          title: 'Filtry',
          foundMessage: 'Znaleziono',
        },
        filters: {
          name: {
            header: 'Imię',
            placeholder: 'Jan Nowak',
          },
          username: {
            header: 'Nazwisko',
            placeholder: 'jan123',
          },
          email: {
            header: 'Email',
            placeholder: 'jan.nowak@gmail.com',
          },
          phone: {
            header: 'Telefon',
            placeholder: '732 626 344',
          },
        },
      },
    },
  },
});
