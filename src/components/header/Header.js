import Logo from './Logo';
import Contact from './Contact';

export function Header() {
    return(
        <header className="header">
            <Logo />
            <Contact />
        </header>
    )
}

export default Header;