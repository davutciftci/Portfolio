
function Contact() {
  return (
    <section className="home">
      <div className="home-content" style={{ maxWidth: '700px' }}>
        <h1>Contact <span>Me</span></h1>
        <p>İş birliği fırsatları, projeler veya sadece merhaba demek için benimle iletişime geçebilirsiniz.</p>

        <div style={{ marginTop: '2rem', fontSize: '1.6rem', lineHeight: '2.5' }}>
          <p><i className="fa-solid fa-envelope" style={{ color: '#2bdac0', marginRight: '1rem' }}></i>
            <a href="mailto:davut@email.com" style={{ color: 'white' }}>davut@gmail.com</a>
          </p>
          <p><i className="fa-solid fa-phone" style={{ color: '#2bdac0', marginRight: '1rem' }}></i>
            <a href="tel:+905551234567" style={{ color: 'white' }}>+90 555 123 45 67</a>
          </p>
          <p><i className="fa-solid fa-location-dot" style={{ color: '#2bdac0', marginRight: '1rem' }}></i>
            İstanbul, Türkiye
          </p>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com/in/davut" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/davut" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/davut" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="mailto:davut@email.com" className="btn">Email Gönder</a>
        </div>
      </div>
    </section>
  )
}

export default Contact