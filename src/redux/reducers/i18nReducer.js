import {createReducer, updateObject} from '../reducerUtilities.js'
import * as types from "../actions/i18nAction";

const initState = {
    translations: null,
    locale: "en"
};

function loadTranslations(state, action) {
    return updateObject(state, {
        translations: action.translations
    });
}

function setLocale(state, action) {
    return updateObject(state, {
        locale: action.locale
    });
}

export const i18nReducer = createReducer(initState, {
  [types.LOAD_TRANSLATIONS]: loadTranslations,
  [types.SET_LOCALE]: setLocale,
});

export default i18nReducer;