import { lazy, Suspense, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SocialIcons from "../components/SocialIcons"
import ParticlesBackdrop from "../components/ParticlesBackdrop"
import HeroStatic from "../components/HeroStatic"
import { useDeferredEffects } from "../hooks/useDeferredEffects"
import { useTranslation } from "react-i18next"
import SEO from "../components/SEO"

const HomeHeroAnimated = lazy(() => import("../components/HomeHeroAnimated"))
const Threads = lazy(() => import("../components/reactbits/Animations/Threads/Threads"))

function Home() {
  const { t } = useTranslation()
  const showEffects = useDeferredEffects()
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowWidth <= 480
  const isTablet = windowWidth > 480 && windowWidth <= 1024

  return (
    <section className="home home-reactbits">
      <SEO title={t("seo.home.title")} description={t("seo.home.description")} />
      <ParticlesBackdrop enabled={showEffects} />

      <div className="home-content home-content-reactbits">
        {showEffects ? (
          <Suspense fallback={<HeroStatic />}>
            <HomeHeroAnimated />
          </Suspense>
        ) : (
          <HeroStatic />
        )}

        <SocialIcons />

        <div className="home-cta">
          <Link to="/contact" className="btn btn-primary-glow">
            {t("home.btnHire")}
          </Link>
          <Link to="/about" className="btn btn-outline-orange">
            {t("home.btnAbout")}
          </Link>
        </div>
      </div>

      <div className="home-visual">
        {showEffects && (
          <Suspense fallback={null}>
            {isMobile || isTablet ? (
              <Threads
                color="#ff6a00"
                count={5}
                speed={0.6}
                maxDistance={100}
                className="home-threads-mobile"
              />
            ) : (
              <Threads
                color="#ff6a00"
                count={15}
                speed={0.8}
                maxDistance={150}
                className="home-threads-desktop"
              />
            )}
          </Suspense>
        )}
      </div>
    </section>
  )
}

export default Home
