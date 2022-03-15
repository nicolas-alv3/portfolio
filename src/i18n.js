
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENTranslation from "./components/data/locales/en/translation.json";
import ESTranslation from "./components/data/locales/es/translation.json";

export const initI18n = () => { 
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
            translation: ENTranslation
            },
            es: {
            translation: ESTranslation
            }
        },
        lng: "es", // if you're using a language detector, do not define the lng option
        fallbackLng: "es"
        });
    }
