# Rose App

Next.js App Router starter with React, TypeScript, Tailwind CSS, and next-intl.

## Development

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Routes support English (`/en`) and Arabic (`/ar`), including RTL layout and locale-specific fonts.

```bash
npm run lint
npm run typecheck
npm run format:check
npm run check
npm run build
```

Run `npm run format` to format the project or `npm run lint:fix` to fix lint issues.
`npm ci` installs Husky hooks through the `prepare` script. Before each commit,
lint-staged fixes lint issues and formats staged files, then TypeScript checks
the whole project. Any remaining errors block the commit.

## Structure

- `src/app/[locale]`: localized pages and root layout
- `src/app/globals.css`: design tokens and global styles
- `src/components`: shared controls and UI primitives
- `src/i18n` and `messages`: locale routing and translations
- `src/context`: shared React providers and hooks
- `public/images`: Rose product and brand assets for feature development

## Themes

The theme selector supports Light, Dark, and System (the default). Preferences are saved in browser storage and synchronized across tabs. System mode follows OS changes immediately. The provider restores the saved theme after hydration; the initial server-rendered page uses the light theme. Theme colors use the semantic tokens in `globals.css`; Tailwind's `dark:` variant follows the resolved theme.

Client components can call `useTheme()` from `@/context/theme.context` to read `theme`, read `resolvedTheme` (light or dark), or call `setTheme("light" | "dark" | "system")`. The root layout supplies `ThemeProvider`.
