import { Link } from 'react-router-dom';
import ShinyText from './reactbits/TextAnimations/ShinyText/ShinyText';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-modern">
            <div className="footer-modern-content">
                <div className="footer-logo">
                    <Link to="/" onClick={scrollToTop}>D<span style={{ color: 'var(--primary-color)' }}>C</span></Link>
                </div>
                
                <div className="footer-text">
                    <p>
                        <ShinyText 
                            text={t('footer.copyright')} 
                            disabled={false} 
                            speed={3} 
                            className="shiny-footer-text" 
                        />
                    </p>
                </div>

                <div className="footer-iconTop" onClick={scrollToTop} title={t('footer.backToTop')}>
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
