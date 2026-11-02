import { FaWhatsapp } from "react-icons/fa";
import { prices } from "../data/prices";
import { buildWhatsAppLink } from "../config";

function PriceMenu() {
  return (
    <section id="prix" className="price-section">
      <h2>Notre menu des prix</h2>
      <p className="price-note">
        Prix des modèles simples. Les modèles chargés ont un prix différent.
      </p>

      <div className="price-grid">
        {prices.map((group) => (
          <article className="price-card" key={group.size}>
            <h3>{group.size}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.flavor}>
                  <span>{item.flavor}</span>
                  <strong>{item.price} DT</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="price-cta">
        <p>Un modèle personnalisé ou chargé ? Demandez un devis.</p>
        <a
          href={buildWhatsAppLink(
            "Bonjour Rayou's Cake, je souhaite un devis pour un modèle personnalisé."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp /> Demander un devis
        </a>
      </div>
    </section>
  );
}

export default PriceMenu;