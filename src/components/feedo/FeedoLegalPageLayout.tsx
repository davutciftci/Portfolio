import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaArrowLeft } from "react-icons/fa6"
import ParticlesBackdrop from "../ParticlesBackdrop"
import SEO from "../SEO"
import { useDeferredEffects } from "../../hooks/useDeferredEffects"

type FeedoLegalPageLayoutProps = {
  children: React.ReactNode
  seoTitle: string
  seoDescription: string
}

function FeedoLegalPageLayout({
  children,
  seoTitle,
  seoDescription,
}: FeedoLegalPageLayoutProps) {
  const { t } = useTranslation()
  const showParticles = useDeferredEffects()

  return (
    <section className="feedo-detail-section feedo-legal-section">
      <SEO title={seoTitle} description={seoDescription} />
      <ParticlesBackdrop enabled={showParticles} />

      <div className="feedo-detail-content">
        <div className="feedo-back-row feedo-legal-back-row">
          <Link
            to="/projects/feedo"
            className="btn btn-secondary-outline feedo-back-btn"
          >
            <FaArrowLeft style={{ marginRight: "0.8rem" }} aria-hidden />
            {t("feedo.legal.backToFeedo")}
          </Link>
        </div>

        <article className="feedo-legal-doc">{children}</article>
      </div>
    </section>
  )
}

export default FeedoLegalPageLayout
