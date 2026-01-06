import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiLight, CiDark } from 'react-icons/ci';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const location = useLocation();

    // Tema değişimini yönet
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

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
        <header className="header">
            <Link to="/" className="logo" onClick={closeMenu}>DC</Link>

            <div className={`bx bx-menu ${isOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
                <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '2.4rem',
                        color: 'var(--text-color)',
                        marginLeft: '2rem',
                        transition: '0.3s ease',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                >
                    {theme === 'dark' ? <CiLight /> : <CiDark />}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
