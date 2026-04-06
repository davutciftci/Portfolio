import { Link } from "react-router-dom"
import SocialIcons from "../components/SocialIcons"
import Aurora from "../components/reactbits/Backgrounds/Aurora/Aurora"
import BlurText from "../components/reactbits/TextAnimations/BlurText/BlurText"
import TextType from "../components/reactbits/TextAnimations/TextType/TextType"
import ShinyText from "../components/reactbits/TextAnimations/ShinyText/ShinyText"
import MagnetLines from "../components/reactbits/Animations/MagnetLines/MagnetLines"
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  
  return (
    <section className="home home-reactbits">
      {/* Aurora arka plan */}
      <div className="aurora-bg">
        <Aurora
          colorStops={['#ff6a00', '#1a1a1a', '#1a9c8a']}
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
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

      {/* Sağ taraf - MagnetLines dekoratif */}
      <div className="home-visual">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="45vmin"
          lineColor="#ff6a00"
          lineWidth="0.4vmin"
          lineHeight="4vmin"
          baseAngle={-15}
          className="home-magnet"
        />
      </div>
    </section>
  )
}

export default Home
