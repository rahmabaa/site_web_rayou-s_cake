import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../config";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Made with love</p>
        <h1>Des gâteaux faits avec amour pour vos plus beaux moments</h1>
        <p className="hero-text">
          Gâteaux personnalisés pour anniversaires, mariages et toutes vos occasions.
  Chaque création est réalisée sur commande, selon vos envies
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp /> Commander sur WhatsApp
        </a>
      </div>

      <div className="hero-photos">
        <img src="/images/cakes/2938.jpg" alt="Gâteau Vaiana" />
        <img src="/images/cakes/2945.jpg" alt="Gâteau papillons" />
        <img src="/images/cakes/2949.jpg" alt="Gâteau licorne" />
      
      </div>
    </section>
  );
}

export default Hero;