
import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        {/* image placeholder */}
      </div>
      <div className="home-content" >
        <h1>Hi, It's <span>Davut</span></h1>
        <h3>Full Stack Developer & Problem Solver</h3>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>Yazılım geliştirme tutkusuyla modern web teknolojilerinde uzmanlaşmış bir geliştiriciyim. React, TypeScript ve Node.js ile kullanıcı odaklı, ölçeklenebilir uygulamalar geliştiriyorum.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/barzandavutciftci/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/davutciftci" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
        <div className="btn">
          <Link to="/contact">Hire me</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
