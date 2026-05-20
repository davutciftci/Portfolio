import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import ParticlesBackdrop from "../components/ParticlesBackdrop"
import AnimatedContent from "../components/reactbits/Animations/AnimatedContent/AnimatedContent"
import DecryptedText from "../components/reactbits/TextAnimations/DecryptedText/DecryptedText"
import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import SEO from "../components/SEO"
import { useDeferredEffects } from "../hooks/useDeferredEffects"

function Projects() {
  const { t } = useTranslation()
  const showParticles = useDeferredEffects()
  const accent = "#1a9c8a"
  const accentBg = "rgba(26, 156, 138, 0.12)" as const

  return (
    <section className="projects-section">
      <SEO
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
      />
      <ParticlesBackdrop enabled={showParticles} />

      <div className="projects-content">
        <PageHeader
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
          shineColor={accent}
          subtitleClassName="projects-subtitle"
        />

        <div className="projects-grid projects-grid--single">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            delay={0}
            duration={0.8}
          >
            <Link
              to="/projects/feedo"
              className="project-card-link"
              aria-label={t("projects.feedoCardAria")}
            >
              <SpotlightCard
                className="service-card project-list-card"
                spotlightColor={accentBg}
              >
                <div className="project-feedo-heading-stack">
                  <div className="project-feedo-logo-wrap">
                    <img
                      src="/feedo-logo.png"
                      alt=""
                      role="presentation"
                      className="project-feedo-logo-img"
                      width={220}
                      height={56}
                      decoding="async"
                    />
                  </div>
                  <h3 className="service-title project-feedo-card-title">
                    <DecryptedText
                      text={t("projects.feedoCardTitle")}
                      animateOn="view"
                      sequential
                      speed={55}
                      className="service-decrypted-title"
                    />
                  </h3>
                </div>

                <p className="service-desc">{t("projects.feedoCardDesc")}</p>

                <div className="project-card-footer">
                  <span className="project-card-cta">
                    {t("projects.viewDetails")}
                    <FaArrowRight aria-hidden />
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}

export default Projects
