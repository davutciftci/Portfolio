import { useTranslation } from "react-i18next"
import FeedoLegalPageLayout from "../components/feedo/FeedoLegalPageLayout"
import { FeedoKvkLegalContent } from "../content/FeedoKvkLegalContent"

function FeedoKvkDisclosure() {
  const { t } = useTranslation()

  return (
    <FeedoLegalPageLayout
      seoTitle={t("seo.feedo.kvkDisclosure.title")}
      seoDescription={t("seo.feedo.kvkDisclosure.description")}
    >
      <FeedoKvkLegalContent />
    </FeedoLegalPageLayout>
  )
}

export default FeedoKvkDisclosure
