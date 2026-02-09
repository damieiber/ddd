import 'server-only'
import type { Locale } from '@/i18n-config'

// We enumerate all dictionaries here for better type safety and to avoid dynamic imports issues used in edge
const dictionaries = {
  es: () => import('@/dictionaries/es').then((module) => module.default),
  en: () => import('@/dictionaries/en').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // If the dictionary for the requested locale doesn't exist, fall back to 'es'
  if (!dictionaries[locale]) {
    console.warn(`Dictionary for locale '${locale}' not found. Defaulting to 'es'.`)
    return dictionaries['es']()
  }
  
  return dictionaries[locale]()
}
