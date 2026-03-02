import { createContext } from 'react'
import type { Language, Translations } from './translations'

export type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const I18nContext = createContext<I18nContextValue | null>(null)
