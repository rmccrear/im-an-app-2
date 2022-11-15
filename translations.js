import * as Localization from 'expo-localization';
import { I18n } from "i18n-js";

const i18n = new I18n({
  en: { welcome: 'Hello', contacts: 'Contacts' },
  ja: { welcome: 'こんにちは', contacts: '連絡先' },
  'zh-Hant': { welcome: '你好', contacts: '聯繫人' },
  'zh-Hans': { welcome: '你好', contacts: '联系人' },
  zh: { welcome: '你好', contacts: '联系人' },
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;