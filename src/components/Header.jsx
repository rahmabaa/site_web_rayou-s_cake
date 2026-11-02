import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

import { PHONE_DISPLAY, PHONE_LINK, INSTAGRAM_URL, FACEBOOK_URL } from "../config";
function Header() {
  return (
    <header className="header">
      <a href="/" className="brand">Rayou's Cake</a>
      <nav>
        <a href="#gateaux">Gâteaux</a>
        <a href="#prix">Prix</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-contact">
        <a href={`tel:${PHONE_LINK}`} className="phone">
          <FaPhoneAlt /> <span>{PHONE_DISPLAY}</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social"
        >
          <FaInstagram />
        </a>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social"
        >
          <FaFacebookF />
        </a>
      </div>
    </header>
  );
}

export default Header;