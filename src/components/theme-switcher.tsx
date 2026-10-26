"use client";

import { useTranslations } from "next-intl";
import { parseTheme, themeModes, useTheme } from "@/context/theme.context";

export function ThemeSwitcher() {
  const t = useTranslations("theme");
  const { theme, setTheme } = useTheme();

  return (
    <label className="flex items-center gap-2 px-4 py-2">
      <span>{t("label")}</span>
      <select
        value={theme}
        onChange={(event) => setTheme(parseTheme(event.target.value))}
        className="rounded-md border border-input bg-background px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-primary"
      >
        {themeModes.map((mode) => (
          <option key={mode} value={mode}>{t(mode)}</option>
        ))}
      </select>
    </label>
  );
}
