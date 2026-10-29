"use client";
import { useTranslations } from "next-intl";
import { Monitor, Moon, Sun } from "lucide-react";
import { parseTheme, themeModes, useTheme } from "@/context/theme.context";
import { cn } from "@/shared/utils/tailwind-merge";

const icons = {
  light: Sun,
  system: Monitor,
  dark: Moon,
} as const;

export function ThemeMode() {
  const t = useTranslations("theme");
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "inline-flex h-10 w-27 items-center",
        "border-border-soft bg-bg-plain rounded-full border p-0.75",
      )}
    >
      {themeModes.map((mode) => {
        const Icon = icons[mode];
        const isSelected = theme === mode;

        return (
          <button
            key={mode}
            type="button"
            aria-label={t(mode)}
            aria-pressed={isSelected}
            title={t(mode)}
            onClick={() => setTheme(parseTheme(mode))}
            className={cn(
              "text-text-plain flex size-8.5 flex-1 items-center justify-center",
              "rounded-full transition-colors",
              "focus-visible:outline-none",
              "focus-visible:ring-ring focus-visible:ring-2",
              "focus-visible:ring-offset-1",
              "focus-visible:ring-offset-background",
              isSelected && "bg-bg-soft dark:bg-bg-muted shadow-sm",
            )}
          >
            <Icon
              aria-hidden="true"
              className="size-4.5 shrink-0"
              strokeWidth={2}
            />
          </button>
        );
      })}
    </div>
  );
}
