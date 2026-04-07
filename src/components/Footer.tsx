import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa6';
import ShinyText from './reactbits/TextAnimations/ShinyText/ShinyText';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const updateTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
            setTheme(currentTheme);
        };

        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const isLight = theme === 'light';

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
                            color={isLight ? "#4b5563" : "#b5b5b5"}
                            shineColor={isLight ? "#000000" : "#ffffff"}
                        />
                    </p>
                </div>

                <div className="footer-iconTop" onClick={scrollToTop} title={t('footer.backToTop')}>
                    <FaArrowUp aria-hidden />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
