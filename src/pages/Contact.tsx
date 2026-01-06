
import SocialIcons from "../components/SocialIcons"

function Contact() {
  return (
    <section className="home">
      <div className="home-content" style={{ maxWidth: '800px' }}>
        <h1>Contact <span>Me</span></h1>
        <p>You can contact me for collaboration opportunities, projects, and more.</p>

        <div style={{ marginTop: '2rem', fontSize: '1.6rem', lineHeight: '2.5' }}>
          <p><i className="fa-solid fa-envelope" style={{ color: 'var(--primary-color)', marginRight: '1rem' }}></i>
            <a href="mailto:davutbciftci@gmail.com" style={{ color: 'var(--text-color)' }}>davutbciftci@gmail.com</a>
          </p>
          <p><i className="fa-solid fa-phone" style={{ color: 'var(--primary-color)', marginRight: '1rem' }}></i>
            <a href="tel:+905551234567" style={{ color: 'var(--text-color)' }}>+90 555 123 45 67</a>
          </p>
          <p style={{ color: 'var(--text-color)' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--primary-color)', marginRight: '1rem' }}></i>
            Istanbul, Turkey
          </p>
        </div>

        <SocialIcons />

        <div style={{ marginTop: '2rem' }}>
          <a href="mailto:davutbciftci@gmail.com" className="btn">Send Email</a>
        </div>
      </div>
    </section>
  )
}

export default Contact