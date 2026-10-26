import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { geistMono, sarabun, tajawal } from "../fonts";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

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
      lang={locale}
      dir={dir}
      className={`${sarabun.variable} ${tajawal.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
