import 'server-only'
import type { Locale } from '@/i18n-config'

// We enumerate all dictionaries here for better type safety and to avoid dynamic imports issues used in edge
const dictionaries = {
  es: () => import('@/dictionaries/es').then((module) => module.default),
  en: () => import('@/dictionaries/en').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
