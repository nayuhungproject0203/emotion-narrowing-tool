import { zhTW } from './zh-TW';
import { ja } from './ja';
import { en } from './en';

export type Locale = 'zh-TW' | 'ja' | 'en';

export const translations = {
  'zh-TW': zhTW,
  'ja': ja,
  'en': en,
};

export type TranslationKeys = typeof zhTW;

export const getTranslation = (locale: Locale) => {
  return translations[locale];
};

// Simple helper to get nested keys
export const t = (locale: Locale, key: string, params?: Record<string, string>) => {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      return key; // Fallback to key if not found
    }
  }
  
  if (typeof value === 'string' && params) {
    Object.entries(params).forEach(([k, v]) => {
      value = value.replace(`{${k}}`, v);
    });
  }
  
  return value;
};
