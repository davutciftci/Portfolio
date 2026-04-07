import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import tr from './locales/tr';

const resources = {
  en: { translation: en },
  tr: { translation: tr }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Update the lang attribute of the html element
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
