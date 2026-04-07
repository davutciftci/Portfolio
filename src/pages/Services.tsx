import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import PageHeader from "../components/PageHeader"
import Particles from "../components/reactbits/Backgrounds/Particles/Particles"
import AnimatedContent from "../components/reactbits/Animations/AnimatedContent/AnimatedContent"
import DecryptedText from "../components/reactbits/TextAnimations/DecryptedText/DecryptedText"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Service = {
  id: number;
  title: string;
  icon: string;
  desc: string;
  color: string;
  colorBg: `rgba(${number}, ${number}, ${number}, ${number})`;
};

function Services() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      id: 1,
      title: t('services.s1_title'),
      icon: "fa-solid fa-code",
      desc: t('services.s1_desc'),
      color: "#ff6a00",
      colorBg: "rgba(255, 106, 0, 0.12)"
    },
    {
      id: 2,
      title: t('services.s2_title'),
      icon: "fa-solid fa-cart-shopping",
      desc: t('services.s2_desc'),
      color: "#1a9c8a",
      colorBg: "rgba(26, 156, 138, 0.12)"
    },
    {
      id: 3,
      title: t('services.s3_title'),
      icon: "fa-solid fa-server",
      desc: t('services.s3_desc'),
      color: "#ff6a00",
      colorBg: "rgba(255, 106, 0, 0.12)"
    },
    {
      id: 4,
      title: t('services.s4_title'),
      icon: "fa-solid fa-mobile-screen-button",
      desc: t('services.s4_desc'),
      color: "#1a9c8a",
      colorBg: "rgba(26, 156, 138, 0.12)"
    }
  ];

  return (
    <section className="services-section">
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
                  <i className={`${service.icon} service-icon`} style={{ color: service.color }}></i>
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
              <i className="fa-solid fa-rocket" style={{ marginRight: '1rem' }}></i>
              {t('services.ctaBtn')}
            </Link>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}

export default Services
