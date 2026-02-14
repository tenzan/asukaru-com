import { ui, defaultLocale, type Locale, type TranslationKey } from "./ui";

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "ja") return "ja";
  return defaultLocale;
}

export function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key];
}

export function getLocalePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/${locale}${cleanPath}`;
}

export function getSwitchLocalePath(url: URL): string {
  const locale = getLocaleFromUrl(url);
  const pathname = url.pathname;

  if (locale === "ja") {
    // Remove /ja prefix
    const enPath = pathname.replace(/^\/ja/, "") || "/";
    return enPath;
  }
  // Add /ja prefix
  return `/ja${pathname === "/" ? "" : pathname}`;
}
