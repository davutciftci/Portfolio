import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiLight, CiDark } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        let lastScrollY = window.scrollY;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Eğer 100px'den fazla aşağı inildiyse ve aşağı kaydırılıyorsa gizle
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                setIsScrolled(true);
            } else {
                // Yukarı kaydırılıyorsa veya en üstteysek göster
                setIsScrolled(false);
            }
            
            lastScrollY = currentScrollY;
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo" onClick={closeMenu}>D<span>C</span></Link>

            <div className={`bx bx-menu ${isOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <Link to="/" className={isActive('/')} onClick={closeMenu}>{t('navbar.home')}</Link>
                <Link to="/about" className={isActive('/about')} onClick={closeMenu}>{t('navbar.about')}</Link>
                <Link to="/services" className={isActive('/services')} onClick={closeMenu}>{t('navbar.services')}</Link>
                <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>{t('navbar.contact')}</Link>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                    <button
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '5px',
                            padding: '0.4rem 0.8rem',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'var(--text-color)',
                            transition: '0.3s ease',
                        }}
                    >
                        {i18n.language === 'en' ? 'TR' : 'EN'}
                    </button>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '2.4rem',
                            color: 'var(--text-color)',
                            marginLeft: '1rem',
                            transition: '0.3s ease',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    >
                        {theme === 'dark' ? <CiLight /> : <CiDark />}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
