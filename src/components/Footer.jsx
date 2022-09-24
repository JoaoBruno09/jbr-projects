import { useTranslation } from "react-i18next";

function Footer() {
  //variable to do the translation
  const { t, i18n } = useTranslation();
  return (
    <footer className="container-2xl p-4 bg-white dark:bg-gray-900 dark:text-white shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {t("Footer Text")}
      </span>
    </footer>
  );
}

export default Footer;
