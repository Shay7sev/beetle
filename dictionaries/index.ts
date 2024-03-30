// import "server-only"

export const locales = ["zh-Hans", "zh-Hant", "en-US"] as const

export const defaultLocale = "en-US"

const dictionaries = {
  "zh-Hant": () => import("./zh-Hant.json").then((module) => module.default),
  "zh-Hans": () => import("./zh-Hans.json").then((module) => module.default),
  "en-US": () => import("./en-US.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export const getLangText = (obj: { [key in Locale]: string }, lang: Locale) =>
  obj[lang]

export const getLangUrl = (url: string, lang: Locale) => `/${lang}${url}`

export const getMetaDataAlternates = (suffix: string, lang: Locale) => {
  return {
    languages: {
      "zh-Hans": `/zh-Hans${suffix}`,
      "zh-Hant": `/zh-Hant${suffix}`,
    },
    canonical: `/${lang}${suffix}`,
  }
}
