import I18n from 'react-native-i18n';
import en from '../locales/en';
import jp from '../locales/vi';

I18n.fallbacks = true;
I18n.translations = {
  vi,
  en
};
I18n.locale = 'en';
export default I18n;
