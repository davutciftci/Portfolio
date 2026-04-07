import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SocialIcons from "../components/SocialIcons"
import Particles from "../components/reactbits/Backgrounds/Particles/Particles"
import Threads from "../components/reactbits/Animations/Threads/Threads"
import BlurText from "../components/reactbits/TextAnimations/BlurText/BlurText"
import TextType from "../components/reactbits/TextAnimations/TextType/TextType"
import ShinyText from "../components/reactbits/TextAnimations/ShinyText/ShinyText"
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 1024;
  
  return (
    <section className="home home-reactbits">
      {/* Particles arka plan (Aurora yerine) */}
      <div className="aurora-bg">
        <Particles
          particleCount={150}
          particleColors={['#ff6a00', '#1a9c8a', '#ffffff']}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={100}
          speed={0.1}
        />
      </div>

      <div className="home-content home-content-reactbits">
        {/* Başlık - BlurText animasyonu */}
        <div className="home-greeting">
          <BlurText
            text={t('home.greeting')}
            className="home-h1-blur"
            animateBy="words"
            direction="top"
            delay={150}
            stepDuration={0.5}
          />
        </div>

        {/* Alt başlık - ShinyText */}
        <div className="home-subtitle">
          <ShinyText
            text={t('home.subtitle')}
            className="home-shiny-subtitle"
            speed={3}
            color="#f4f4f4"
            shineColor="#ff6a00"
            spread={90}
          />
        </div>

        {/* Animasyonlu rol - TextType */}
        <div className="home-role">
          <TextType
            text={[
              t('home.role_1'),
              t('home.role_2'), 
              t('home.role_3')
            ]}
            className="home-typed-role"
            textColors={['#ff6a00', '#1a9c8a', '#ff6a00']}
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            showCursor={true}
            cursorClassName="home-typed-cursor"
            loop={true}
          />
        </div>

        <p className="home-desc">
          {t('home.desc')}
        </p>

        <SocialIcons />

        <div className="home-cta">
          <Link to="/contact" className="btn btn-primary-glow">{t('home.btnHire')}</Link>
          <Link to="/about" className="btn btn-outline-orange">{t('home.btnAbout')}</Link>
        </div>
      </div>

      {/* Sağ taraf - MagnetLines dekoratif (Sadece Desktop) / Particles (Mobil & Tablet) */}
      <div className="home-visual">
        {isMobile || isTablet ? (
          <Threads 
            color="#ff6a00"
            count={15}
            speed={0.8}
            maxDistance={120}
            className="home-threads-mobile"
          />
        ) : (
          <Threads 
            color="#ff6a00"
            count={35}
            speed={1.2}
            maxDistance={180}
            className="home-threads-desktop"
          />
        )}
      </div>
    </section>
  )
}

export default Home
