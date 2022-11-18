import Logo from './Logo';
import Contact from './Contact';

export function Header() {
    return(
        <header className="header">
            <div className="header__container">
                <Logo />
                <Contact />
            </div>
        </header>
    )
}

export default Header;