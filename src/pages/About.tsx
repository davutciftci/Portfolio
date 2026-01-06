
function About() {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  return (
    <section className="home">
      <div className="home-content" style={{ maxWidth: '800px' }}>
        <h1>About <span>Me</span></h1>
        <h3>Who am I?</h3>
        <p style={{ marginBottom: '2rem' }}>
          I am a passionate Full Stack Developer. I love building user-friendly, scalable, and performant applications using modern web technologies.
          My journey in the technology world has been shaped by curiosity and a desire to solve real-world problems.
        </p>

        <h3 style={{ marginTop: '3rem' }}>My Skills</h3>
        <div style={{ marginTop: '1.5rem' }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                <span>{skill.name}</span>
                <span style={{ color: '#ff6a00' }}>{skill.level}%</span>
              </div>
              <div style={{ background: '#333', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff6a00, #1a9c8a)',
                    borderRadius: '10px',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '3rem' }}>Technologies and Tools I Use</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          {["Javascript", 'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Git', 'Docker', 'Tailwind CSS', 'Next.js', "Docker", "Git", "VSCode", "Cursor", "Antigravity"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.8rem 1.5rem',
                background: 'transparent',
                border: '2px solid #ff6a00',
                borderRadius: '2rem',
                fontSize: '1.3rem',
                color: '#ff6a00',
                transition: '0.3s ease'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 style={{ marginTop: '3rem' }}>Experience & Education</h3>
        <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', lineHeight: '2' }}>
          <p><span style={{ color: '#ff6a00' }}>•</span> Full Stack Developer</p>
          <p><span style={{ color: '#ff6a00' }}>•</span> Psychology Degree</p>
          <p><span style={{ color: '#ff6a00' }}>•</span> 10+ completed projects</p>
          <p><span style={{ color: '#ff6a00' }}>•</span> Freelance & Remote work experience</p>
        </div>
      </div>
    </section>
  )
}

export default About