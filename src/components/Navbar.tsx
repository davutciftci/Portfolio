import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
            <Link to="/" className="logo" onClick={closeMenu}>Davut</Link>

            <div className={`bx bx-menu ${isOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
                <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;
