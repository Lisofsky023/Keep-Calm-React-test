import companyLogo from './img/logo.png';

export function Logo() {
    return (
        <div className="header__logo">
            <a href="#" className="header__logo-link">
                <img src={companyLogo} alt="circeya" className="header__logo-img" />
            </a>
        </div>
    )
}

export default Logo;