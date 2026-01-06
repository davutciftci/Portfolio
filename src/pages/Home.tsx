
import { Link } from "react-router-dom"
import SocialIcons from "../components/SocialIcons"

function Home() {
  return (
    <section className="home">
      <div className="home-content" >
        <h1>Hi, I'm <span>Davut</span></h1>
        <h3>Full Stack Developer & Problem Solver</h3>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>Driven by a passion for software development, I build user-focused, scalable applications using modern web technologies like React, TypeScript, and Node.js.</p>

        <SocialIcons />

        <div className="btn">
          <Link to="/contact">Hire me</Link>
        </div>
      </div>
      <div className="home-img">
        <img src="/src/img/portfolio.png" alt="Profile" />
      </div>
    </section>
  )
}

export default Home
