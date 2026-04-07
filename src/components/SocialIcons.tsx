import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6';

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/davutciftci/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin aria-hidden />
            </a>
            <a href="https://github.com/davutciftci" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden />
            </a>
            <a href="https://medium.com/@davutciftci" target="_blank" rel="noopener noreferrer" title="Medium" aria-label="Medium">
                <FaMedium aria-hidden />
            </a>
        </div>
    );
}

export default SocialIcons;