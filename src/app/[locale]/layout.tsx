import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeProvider } from "@/context/theme.context";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { geistMono, sarabun, tajawal } from "../fonts";
import "../globals.css";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Rose App",
  description: "Rose Application",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Direction for HTML
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={dir}
      className={`${sarabun.variable} ${tajawal.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <NextIntlClientProvider>
            <header className="flex flex-wrap items-center justify-between">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </header>

            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
