import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DocumentMeta = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = `${t("app.title")} - ${t("app.subtitle")}`;
    document.title = title;

    const descriptionContent = t("app.subtitle");
    let descriptionTag = document.querySelector<HTMLMetaElement>(
      "meta[name='description']"
    );
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", descriptionContent);

    if (i18n.language) {
      document.documentElement.lang = i18n.language;
    }
  }, [t, i18n.language]);

  return null;
};

export default DocumentMeta;
