const supportedLanguages = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' },
};

export type LanguageKeys = (keyof typeof supportedLanguages)[];

export default supportedLanguages;