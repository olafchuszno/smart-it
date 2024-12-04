import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import supportedLanguages from './constants/supportedLanguages.ts';
import SupportedLanguages from './types/SupportedLanguages.ts';

let userLanguage = initializeStartingLanguage();

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
        headerLinks: {
          main: 'main',
          about: 'about',
          usersManagement: 'users management',
          login: 'Log in',
          logout: 'Log out',
        },
        usersTable: {
          notFoundMessage: 'No matching users found',
          fetchingErrorMessage:
            'Could not fetch the users. Please refresh the website.',
        },
        loginPage: {
          title: 'Login page',
          emailLabel: 'Email',
          emailPlaceholder: 'john_doe@email.com',
          passwordLabel: 'Password',
          submitButton: 'Log in',
        },
        // Header titles for each page, Every title key should match the Page URL!
        headerTitle: {
          main: 'Main Page',
          about: 'About Page',
          'users-management': 'Users Management Page',
          login: 'Login Page',
        },
        aboutPage: {
          text: 'This page is about the company',
        },
        mainPage: {
          text: `This is the main page you're on`,
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
        headerLinks: {
          main: 'Strona główna',
          about: 'O firmie',
          usersManagement: 'Zarządzanie użytkownikami',
          login: 'Zaloguj się',
          logout: 'Wyloguj się',
        },
        usersTable: {
          notFoundMessage: 'Nie znaleziono użytkowników o danych kryteriach',
          fetchingErrorMessage:
            'Nie mogliśmy pobrać użytkowników. Odśwież stronę.',
        },
        loginPage: {
          title: 'Logowanie',
          emailLabel: 'Email',
          emailPlaceholder: 'jan_kowalski@email.com',
          passwordLabel: 'Hasło',
          submitButton: 'Zaloguj się',
        },
        aboutPage: {
          text: 'To jest strona o Firmie',
        },
        mainPage: {
          text: 'To jest strona główna',
        },
        // Header titles for each page, Every title key should match the Page URL!
        headerTitle: {
          main: 'Strona główna',
          about: 'O firmie',
          usersManagement: 'Zarządzanie uzytkownikami',
          login: 'Strona logowania',
        },
      },
    },
  },
});

function initializeStartingLanguage(): SupportedLanguages {
  let userLanguage = window.localStorage.getItem('language');

  if (
    !userLanguage ||
    !Object.keys(supportedLanguages).includes(userLanguage)
  ) {
    userLanguage = 'en';
  }

  window.localStorage.setItem('language', userLanguage);

  return userLanguage as SupportedLanguages;
}
