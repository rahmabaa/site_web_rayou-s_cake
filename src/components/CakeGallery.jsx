import { FaWhatsapp } from "react-icons/fa";
import { cakes } from "../data/cakes";
import { buildWhatsAppLink } from "../config";

function CakeGallery() {
  return (
    <section id="gateaux" className="gallery-section">
      <h2>Nos gâteaux</h2>

      <div className="gallery">
        {cakes.map((cake) => (
          <article className="cake-card" key={cake.id}>
           <div className="cake-photo" style={{ "--img": `url(${cake.image})` }}>
  <img src={cake.image} alt={cake.name} loading="lazy" />
</div>
            <div className="cake-info">
              <h3>{cake.name}</h3>
              <p className="price"></p>
              <a
                href={buildWhatsAppLink(
                  `Bonjour Rayou's Cake, je souhaite commander : ${cake.name}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-order"
              >
                <FaWhatsapp /> Commander
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CakeGallery;