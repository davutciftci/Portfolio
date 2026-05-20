import { useTranslation } from "react-i18next"
import FeedoLegalPageLayout from "../components/feedo/FeedoLegalPageLayout"
import { FeedoPrivacyLegalContent } from "../content/FeedoPrivacyLegalContent"

function FeedoPrivacyPolicy() {
  const { t } = useTranslation()

  return (
    <FeedoLegalPageLayout
      seoTitle={t("seo.feedo.privacyPolicy.title")}
      seoDescription={t("seo.feedo.privacyPolicy.description")}
    >
      <FeedoPrivacyLegalContent />
    </FeedoLegalPageLayout>
  )
}

export default FeedoPrivacyPolicy
