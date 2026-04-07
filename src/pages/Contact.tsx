import SocialIcons from "../components/SocialIcons"
import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import PageHeader from "../components/PageHeader"
import DecryptedText from "../components/reactbits/TextAnimations/DecryptedText/DecryptedText"
import Particles from "../components/reactbits/Backgrounds/Particles/Particles"
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact-section">
      {/* Particles arka plan (Aurora yerine) */}
      <div className="aurora-bg">
        <Particles
          particleCount={120}
          particleColors={['#1a9c8a', '#ff6a00', '#ffffff']}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={90}
        />
      </div>

      <div className="contact-content">
        <PageHeader 
          title={t('contact.title')} 
          subtitle={t('contact.subtitle')} 
          shineColor="#1a9c8a"
          subtitleClassName="subtitle-3rem"
        />

        {/* İletişim kartları */}
        <div className="contact-cards">
          <SpotlightCard
            className="contact-card"
            spotlightColor="rgba(255, 106, 0, 0.2)"
          >
            <div className="contact-card-inner">
              <div className="contact-icon-wrap">
                <i className="fa-solid fa-envelope contact-icon"></i>
              </div>
              <div className="contact-info">
                <div className="contact-label">
                  <DecryptedText
                    text={t('contact.email')}
                    animateOn="view"
                    sequential
                    speed={50}
                    className="decrypted-orange"
                  />
                </div>
                <a href="mailto:davutbciftci@gmail.com" className="contact-link">
                  davutbciftci@gmail.com
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="contact-card"
            spotlightColor="rgba(26, 156, 138, 0.2)"
          >
            <div className="contact-card-inner">
              <div className="contact-icon-wrap contact-icon-teal">
                <i className="fa-brands fa-whatsapp contact-icon"></i>
              </div>
              <div className="contact-info">
                <div className="contact-label">
                  <DecryptedText
                    text={t('contact.phone')}
                    animateOn="view"
                    sequential
                    speed={50}
                    className="decrypted-teal"
                  />
                </div>
                <a href="https://wa.me/905444112179" target="_blank" rel="noopener noreferrer" className="contact-link">
                  +90 544 411 21 79
                </a>
              </div>
            </div>
          </SpotlightCard>

          
        </div>

        {/* Sosyal ikonlar */}
        <div className="contact-social">
          <SocialIcons />
        </div>

        {/* CTA butonu */}
        <div className="contact-cta">
          <a href="mailto:davutbciftci@gmail.com" className="btn btn-primary-glow">
            <i className="fa-solid fa-paper-plane" style={{ marginRight: '1rem' }}></i>
            {t('contact.btnSendUrl')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact