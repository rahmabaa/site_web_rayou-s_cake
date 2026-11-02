import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "../config";

const locations = [
  {
    name: "Bab El Khadhra",
    address: "Bab El Khadhra, Tunis",
    query: "Station de métro Bab El Khadra",
  },
  {
    name: "Ariana",
    address: "Ariana",
    query: "Ariana, Tunisie",
  },
];

const contacts = [
  {
    label: "Téléphone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_LINK}`,
    icon: <FaPhoneAlt />,
    className: "phone-icon",
  },
  {
    label: "Facebook",
    value: "Rayou's Cake",
    href: FACEBOOK_URL,
    icon: <FaFacebookF />,
    className: "fb-icon",
    external: true,
  },
  {
    label: "Instagram",
    value: "@rayouscake.patisserie",
    href: INSTAGRAM_URL,
    icon: <FaInstagram />,
    className: "insta-icon",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "Envoyer un message",
    href: WHATSAPP_LINK,
    icon: <FaWhatsapp />,
    className: "wa-icon",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-nous</h2>
      <p className="contact-note">
        Une question ou une commande ? Écrivez-nous ou appelez-nous.
      </p>

      <div className="contact-layout">
        <div className="locations">
          {locations.map((loc) => (
            <article className="location-card" key={loc.name}>
              <iframe
                title={`Carte ${loc.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.query)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="location-info">
                <h3>
                  <FaMapMarkerAlt /> {loc.name}
                </h3>
                <p>{loc.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-more"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-list">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="contact-item"
              {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <span className={`contact-icon ${c.className}`}>{c.icon}</span>
              <span className="contact-text">
                <strong>{c.label}</strong>
                <span>{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;