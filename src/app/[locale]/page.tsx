import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();
  return <div>{t("welcome")}</div>;
}
