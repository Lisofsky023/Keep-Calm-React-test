import phoneIcon from './img/phone.png';


export function Contact() {
    return (
      <>
        <a href="tel:+74954954954" className="header__phone">
          +7 (495) 495-49-54
        </a>
        <a href="tel:+74954954954" className="header__phone-icon">
          <img src={phoneIcon} alt="phone" />
        </a>
      </>
    )
}

export default Contact;