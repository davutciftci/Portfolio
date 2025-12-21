
function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/Sass', level: 85 },
  ];

  return (
    <section className="home">
      <div className="home-content" style={{ maxWidth: '800px' }}>
        <h1>About <span>Me</span></h1>
        <p style={{ marginBottom: '2rem' }}>
          Yazılım geliştirme alanında tutkulu bir Full Stack Developer'ım. Modern web teknolojileri
          ile kullanıcı dostu, ölçeklenebilir ve performanslı uygulamalar geliştirmeyi seviyorum.
          Teknoloji dünyasındaki yolculuğum, merak ve gerçek dünya problemlerini çözme arzusuyla şekillendi.
        </p>

        <h3 style={{ marginTop: '3rem' }}>Yeteneklerim</h3>
        <div style={{ marginTop: '1.5rem' }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                <span>{skill.name}</span>
                <span style={{ color: '#2bdac0' }}>{skill.level}%</span>
              </div>
              <div style={{ background: '#333', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #2bdac0, #1a9c8a)',
                    borderRadius: '10px',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '3rem' }}>Kullandığım Teknolojiler</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Tailwind CSS', 'Next.js'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.8rem 1.5rem',
                background: 'transparent',
                border: '2px solid #2bdac0',
                borderRadius: '2rem',
                fontSize: '1.3rem',
                color: '#2bdac0',
                transition: '0.3s ease'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 style={{ marginTop: '3rem' }}>Deneyim & Eğitim</h3>
        <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', lineHeight: '2' }}>
          <p><span style={{ color: '#2bdac0' }}>•</span> Full Stack Developer</p>
          <p><span style={{ color: '#2bdac0' }}>•</span> Psikolojik Lisans</p>
          <p><span style={{ color: '#2bdac0' }}>•</span> 10+ tamamlanmış proje</p>
          <p><span style={{ color: '#2bdac0' }}>•</span> Freelance & Remote çalışma deneyimi</p>
        </div>
      </div>
    </section>
  )
}

export default About