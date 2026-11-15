import { useLayoutEffect, useState } from "react";
import { sitecore } from "../data/sitecore";

const storageKey = "shwetha-portfolio-theme";

function readTheme() {
  try {
    return localStorage.getItem(storageKey) || sitecore.theme.defaultMode;
  } catch {
    return sitecore.theme.defaultMode;
  }
}

export function usePalette() {
  const [dark, setDark] = useState(() => readTheme() === "dark");
  const paletteId = dark
    ? sitecore.theme.darkPalette
    : sitecore.theme.lightPalette;
  const palette = sitecore.palettes.find((item) => item.id === paletteId)!;

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.palette = palette.id;
    root.dataset.theme = dark ? "dark" : "light";
    const tokens = {
      "--primary-brand": sitecore.theme.primaryColor,
      "--bg": palette.colors.bg,
      "--surface": palette.colors.surface,
      "--text": palette.colors.text,
      "--muted": palette.colors.muted,
      "--line": palette.colors.line,
      "--accent": palette.colors.accent,
      "--accent-text": palette.colors.accentText,
      "--secondary": palette.colors.secondary,
      "--scene-primary": palette.colors.accent,
      "--scene-secondary": palette.colors.secondary,
    };
    for (const [key, value] of Object.entries(tokens))
      root.style.setProperty(key, value);
    root.style.colorScheme = dark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", palette.colors.bg);
    const url = new URL(location.href);
    url.searchParams.delete("palette");
    history.replaceState({}, "", url);
    try {
      localStorage.setItem(storageKey, dark ? "dark" : "light");
    } catch {
      /* Theme switching also works when storage is unavailable. */
    }
    window.dispatchEvent(new Event("portfolio-palette-change"));
  }, [dark, palette]);

  return { dark, toggleTheme: () => setDark((previous) => !previous) };
}
