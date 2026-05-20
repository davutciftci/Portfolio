import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaArrowLeft } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import ParticlesBackdrop from "../components/ParticlesBackdrop"
import AnimatedContent from "../components/reactbits/Animations/AnimatedContent/AnimatedContent"
import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import SEO from "../components/SEO"
import { useDeferredEffects } from "../hooks/useDeferredEffects"

const FEEDO_SECTION_KEYS = [
  "identity",
  "earTag",
  "reproduction",
  "ration",
  "health",
  "productivity",
  "shearing",
  "financial",
  "reports",
  "homeOps",
  "account",
  "offline",
  "i18n",
] as const

function FeedoProject() {
  const { t } = useTranslation()
  const showParticles = useDeferredEffects()
  const accent = "#ff6a00"
  const accentBg = "rgba(255, 106, 0, 0.12)" as const

  return (
    <section className="feedo-detail-section">
      <SEO
        title={t("seo.feedo.title")}
        description={t("seo.feedo.description")}
      />
      <ParticlesBackdrop enabled={showParticles} />

      <div className="feedo-detail-content">
        <div className="feedo-back-row">
          <Link to="/projects" className="btn btn-secondary-outline feedo-back-btn">
            <FaArrowLeft style={{ marginRight: "0.8rem" }} aria-hidden />
            {t("feedo.backToProjects")}
          </Link>
        </div>

        <div className="feedo-detail-logo-wrap">
          <img
            src="/feedo-logo.png"
            alt={t("feedo.logoAlt")}
            className="feedo-detail-logo-img"
            width={360}
            height={92}
            decoding="async"
          />
        </div>

        <PageHeader
          title={t("feedo.pageTitle")}
          subtitle={t("feedo.pageSubtitle")}
          shineColor={accent}
          subtitleClassName="feedo-page-subtitle"
        />

        <AnimatedContent distance={40} direction="vertical" delay={0.05} duration={0.6}>
          <SpotlightCard
            className="feedo-intro-card service-card"
            spotlightColor={accentBg}
          >
            <p className="feedo-intro-text">{t("feedo.intro")}</p>
          </SpotlightCard>
        </AnimatedContent>

        <div className="feedo-sections-grid">
          {FEEDO_SECTION_KEYS.map((key, index) => (
            <AnimatedContent
              key={key}
              distance={60}
              direction="vertical"
              reverse={false}
              delay={index * 0.06}
              duration={0.65}
            >
              <SpotlightCard
                className="feedo-feature-card service-card"
                spotlightColor={
                  index % 2 === 0
                    ? ("rgba(255, 106, 0, 0.1)" as const)
                    : ("rgba(26, 156, 138, 0.1)" as const)
                }
              >
                <h3 className="feedo-feature-title">
                  {t(`feedo.sections.${key}.title`)}
                </h3>
                <p className="feedo-feature-body">
                  {t(`feedo.sections.${key}.body`)}
                </p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <hr className="feedo-legal-section-divider" aria-hidden />

        <AnimatedContent distance={36} direction="vertical" delay={0.06} duration={0.55}>
          <h2 className="feedo-legal-cards-heading">{t("feedo.legal.sectionTitle")}</h2>
          <div className="feedo-legal-cards-grid">
            <Link
              to="/projects/feedo/kvk-disclosure"
              className="feedo-legal-card-link"
              aria-label={t("feedo.legal.kvkLinkAria")}
            >
              <SpotlightCard
                className="feedo-legal-card service-card"
                spotlightColor={accentBg}
              >
                <h3 className="feedo-legal-card-title">{t("feedo.legal.kvkCardTitle")}</h3>
                <p className="feedo-legal-card-desc">{t("feedo.legal.kvkCardDesc")}</p>
                <span className="feedo-legal-card-cta">{t("feedo.legal.openDocument")}</span>
              </SpotlightCard>
            </Link>
            <Link
              to="/projects/feedo/privacy-policy"
              className="feedo-legal-card-link"
              aria-label={t("feedo.legal.privacyLinkAria")}
            >
              <SpotlightCard
                className="feedo-legal-card service-card"
                spotlightColor={"rgba(26, 156, 138, 0.12)" as const}
              >
                <h3 className="feedo-legal-card-title">
                  {t("feedo.legal.privacyCardTitle")}
                </h3>
                <p className="feedo-legal-card-desc">{t("feedo.legal.privacyCardDesc")}</p>
                <span className="feedo-legal-card-cta">{t("feedo.legal.openDocument")}</span>
              </SpotlightCard>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}

export default FeedoProject
