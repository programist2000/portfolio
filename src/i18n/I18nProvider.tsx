import {
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import {
  languageStorageKey,
  translations,
  type Language,
} from './translations'
import { I18nContext, type I18nContextValue } from './context'

const resolveInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem(languageStorageKey)
  if (saved === 'en' || saved === 'ru') return saved

  return window.navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(resolveInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
