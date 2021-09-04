import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import get from "lodash/get";
import { createAction } from "redux-actions";
import moment from "moment";

import en from "./en.json";

// https://dev.calkam.com/cor/api/v1/translations
// https://dev.calkam.com/cor/api/v1/translations?lang_id=8

i18next
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: {
          ...en,
        },
      },
    },
  });

export default i18next;
