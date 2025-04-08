import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import it from './locales/it.json'

// Create i18n instance with options
export default createI18n({
  legacy: false, // Use the Composition API
  globalInjection: true, // Make $t, $d, etc. available in templates
  locale: localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale if translation is missing
  messages: {
    en,
    it
  }
})
