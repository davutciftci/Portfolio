import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import PageHeader from "../components/PageHeader"
import ParticlesBackdrop from "../components/ParticlesBackdrop"
import AnimatedContent from "../components/reactbits/Animations/AnimatedContent/AnimatedContent"
import DecryptedText from "../components/reactbits/TextAnimations/DecryptedText/DecryptedText"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO"
import type { IconType } from 'react-icons';
import { FaCode, FaCartShopping, FaServer, FaMobileScreenButton, FaRocket } from 'react-icons/fa6';
import { useDeferredEffects } from "../hooks/useDeferredEffects"

type Service = {
  id: number;
  title: string;
  icon: IconType;
  desc: string;
  color: string;
  colorBg: `rgba(${number}, ${number}, ${number}, ${number})`;
};

function Services() {
  const { t } = useTranslation();
  const showParticles = useDeferredEffects();

  const services: Service[] = [
    {
      id: 1,
      title: t('services.s1_title'),
      icon: FaCode,
      desc: t('services.s1_desc'),
      color: "#ff6a00",
      colorBg: "rgba(255, 106, 0, 0.12)"
    },
    {
      id: 2,
      title: t('services.s2_title'),
      icon: FaCartShopping,
      desc: t('services.s2_desc'),
      color: "#1a9c8a",
      colorBg: "rgba(26, 156, 138, 0.12)"
    },
    {
      id: 3,
      title: t('services.s3_title'),
      icon: FaServer,
      desc: t('services.s3_desc'),
      color: "#ff6a00",
      colorBg: "rgba(255, 106, 0, 0.12)"
    },
    {
      id: 4,
      title: t('services.s4_title'),
      icon: FaMobileScreenButton,
      desc: t('services.s4_desc'),
      color: "#1a9c8a",
      colorBg: "rgba(26, 156, 138, 0.12)"
    }
  ];

  return (
    <section className="services-section">
      <SEO 
        title={t('seo.services.title')} 
        description={t('seo.services.description')} 
      />
      <ParticlesBackdrop enabled={showParticles} />

      <div className="services-content">
        <PageHeader 
          title={t('services.title')} 
          subtitle={t('services.subtitle')} 
          shineColor="#ff6a00"
          subtitleClassName="services-subtitle"
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedContent
              key={service.id}
              distance={80}
              direction="vertical"
              reverse={false}
              delay={index * 0.15}
              duration={0.8}
            >
              <SpotlightCard
                className="service-card"
                spotlightColor={service.colorBg}
              >
                <div className="service-icon-wrap" style={{ 
                  background: service.colorBg, 
                  border: `1px solid ${service.colorBg}` 
                }}>
                  <service.icon className="service-icon" style={{ color: service.color }} aria-hidden />
                </div>
                
                <h3 className="service-title">
                  <DecryptedText
                    text={service.title}
                    animateOn="view"
                    sequential
                    speed={60}
                    className="service-decrypted-title"
                  />
                </h3>
                
                <p className="service-desc">{service.desc}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <div className="services-cta">
          <AnimatedContent distance={50} direction="vertical" delay={0.6}>
            <p className="services-cta-text">{t('services.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary-glow">
              <FaRocket style={{ marginRight: '1rem' }} aria-hidden />
              {t('services.ctaBtn')}
            </Link>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}

export default Services
