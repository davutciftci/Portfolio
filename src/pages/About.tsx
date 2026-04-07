import { useState, useEffect } from "react"
import SpotlightCard from "../components/reactbits/Components/SpotlightCard/SpotlightCard"
import AnimatedContent from "../components/reactbits/Animations/AnimatedContent/AnimatedContent"
import PageHeader from "../components/PageHeader"
import AnimatedTechStack from "../components/AnimatedTechStack"
import ShinyText from "../components/reactbits/TextAnimations/ShinyText/ShinyText"
import DecryptedText from "../components/reactbits/TextAnimations/DecryptedText/DecryptedText"
import TextType from "../components/reactbits/TextAnimations/TextType/TextType"
import Particles from "../components/reactbits/Backgrounds/Particles/Particles"
import { GitHubCalendar } from 'react-github-calendar';
import { useTranslation } from 'react-i18next';

// Handle React 19 JSX Type mismatch
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Calendar = GitHubCalendar as any;

const defaultSkills = [
  { name: 'TypeScript', level: 85, icon: '🔷' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'JavaScript', level: 85, icon: '🟡' },
  { name: 'CSS/Sass', level: 85, icon: '🎨' },
  { name: 'HTML', level: 85, icon: '🌐' },
]

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'ElysiaJS', 'PostgreSQL',
  'Git', 'GitHub', 'Docker', 'Tailwind CSS', 'Next.js', 'Jenkins', 'VSCode', 'Cursor', 'Antigravity'
]

function About() {
  const { t } = useTranslation();
  const [skills, setSkills] = useState(defaultSkills);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Tema değişikliğini takip et
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
      setTheme(currentTheme);
    };

    updateTheme(); // İlk yüklemede kontrol et

    // HTML üzerindeki attribute değişimini izlemek için MutationObserver kullan
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { title: t('about.timeline_fullstack'), icon: '💻', desc: t('about.timeline_fullstack_desc') },
    { title: t('about.timeline_psychology'), icon: '🧠', desc: t('about.timeline_psychology_desc') },
    { title: t('about.timeline_signlanguage'), icon: '🤟', desc: t('about.timeline_signlanguage_desc') },
    { title: t('about.timeline_projects'), icon: '🚀', desc: t('about.timeline_projects_desc') },
    { title: t('about.timeline_freelance'), icon: '🌍', desc: t('about.timeline_freelance_desc') },
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/davutciftci/repos?per_page=100')
      .then(res => res.json())
      .then(repos => {
        if (!Array.isArray(repos)) return;
        const langCounts: Record<string, number> = {};
        for (const repo of repos) {
          if (repo.language) {
            const lang = repo.language === 'TypeScript' || repo.language === 'JavaScript' ? repo.language : null;
            if (lang) {
               langCounts[lang] = (langCounts[lang] || 0) + 1;
            }
          }
          
          const topics = repo.topics || [];
          const name = repo.name?.toLowerCase() || '';
          const desc = repo.description?.toLowerCase() || '';
          
          // React check removed as per request
          if (topics.includes('react') || name.includes('react') || desc.includes('react')) {
            // No longer adding to skills
          }
          
          // Express.js
          if (topics.includes('express') || name.includes('express') || desc.includes('express')) {
            langCounts['Express.js'] = (langCounts['Express.js'] || 0) + 1;
          }
        }
        
        const counts = Object.values(langCounts);
        if (counts.length === 0) return;
        
        const maxCount = Math.max(...counts, 1); // prevent division by zero
        
        const desiredLangs = ['TypeScript', 'Express.js', 'JavaScript'];
        
        const fetchedSkills = Object.entries(langCounts)
          .filter(([name]) => desiredLangs.includes(name))
          .map(([name, count]) => {
            let icon = '💻';
            if (name === 'TypeScript') icon = '🔷';
            else if (name === 'JavaScript') icon = '🟡';
            else if (name === 'React') icon = '⚛️';
            else if (name === 'Express.js') icon = '🚂';
            
            return {
              name,
              level: Math.round((count / maxCount) * 40 + 55), // 55-95 range
              icon
            };
          })
          .sort((a, b) => b.level - a.level);
          
        if (fetchedSkills.length > 0) {
          setSkills(fetchedSkills);
        }
      })
      .catch(err => console.error("Could not fetch github languages", err));
  }, []);

  return (
    <section className="about-section">
      {/* Particles arka plan */}
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

      <div className="about-content">
        {/* Başlık */}
        <PageHeader 
          title={t('about.title')} 
          subtitle={t('about.subtitle')} 
          shineColor="#ff6a00"
          subtitleClassName="subtitle-3rem"
        />

        {/* GitHub Calendar (Commit Gösterge Paneli) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '4rem', 
          padding: '1.5rem', 
          background: theme === 'light' ? '#ffffff' : 'var(--bg-card)', 
          border: theme === 'light' ? '1px solid #d1d5db' : '1px solid var(--border-color)', 
          borderRadius: '1.6rem', 
          backdropFilter: theme === 'light' ? 'none' : 'blur(20px)',
          boxShadow: theme === 'light' ? '0 10px 40px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease'
        }}>
           <div style={{ maxWidth: '100%', overflowX: 'auto', padding: '0.5rem' }}>
              <Calendar 
                username="davutciftci" 
                colorScheme={theme} 
                blockSize={14}
                blockMargin={5}
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
           </div>
        </div>

        {/* Hakkımda metin */}
        <div className="about-bio-row">
          <SpotlightCard
            className="about-bio-card"
            spotlightColor="rgba(255, 106, 0, 0.15)"
          >
            <div className="about-bio-inner">
              <h3 className="about-card-title">
                <DecryptedText
                  text={t('about.whoIAm')}
                  animateOn="view"
                  sequential
                  speed={60}
                  className="decrypted-orange"
                />
              </h3>
              <p className="about-bio-text">
                {t('about.bio')}
              </p>
            </div>
          </SpotlightCard>

          {/* Skill bars */}
          <SpotlightCard
            className="about-skills-card"
            spotlightColor="rgba(26, 156, 138, 0.15)"
          >
            <div className="about-skills-inner">
              <h3 className="about-card-title">
                <DecryptedText
                  text={t('about.topLanguages')}
                  animateOn="view"
                  sequential
                  speed={60}
                  className="decrypted-orange"
                />
              </h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.icon} {skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Tech stack */}
        <AnimatedTechStack stack={techStack} title={t('about.techTools')} />

        {/* Timeline */}
        <div className="about-timeline-section">
          <h3 className="section-label">
            <ShinyText text={t('about.experience')} speed={3} color="#aaa" shineColor="#1a9c8a" />
          </h3>
          <div className="timeline-grid timeline-zigzag">
            {timeline.map((item, index) => (
              <AnimatedContent
                key={item.title}
                distance={100}
                direction="horizontal"
                reverse={index % 2 !== 0}
                delay={0}
                duration={0.8}
                className={`timeline-wrapper ${index % 2 === 0 ? "left" : "right"}`}
              >
                <SpotlightCard
                  className="timeline-card"
                  spotlightColor="rgba(255, 106, 0, 0.12)"
                >
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-text">
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-desc">
                      <TextType 
                        text={item.desc} 
                        typingSpeed={30} 
                        showCursor={true} 
                        cursorBlinkDuration={0.8}
                        startOnVisible={true} 
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About