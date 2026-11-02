import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { cakes } from "../data/cakes";
import { buildWhatsAppLink } from "../config";

function CakeCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % cakes.length);
  const prev = () => setIndex((i) => (i - 1 + cakes.length) % cakes.length);

  // défilement automatique toutes les 4 secondes
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % cakes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section id="gateaux" className="carousel-section">
      <h2>Nos gâteaux</h2>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cakes.map((cake) => (
            <div className="slide" key={cake.id}>
              <img src={cake.image} alt={cake.name} />
              <div className="slide-info">
                <h3>{cake.name}</h3>
                <p className="price">À partir de {cake.price} DT</p>
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
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prev} aria-label="Précédent">
          <FaChevronLeft />
        </button>
        <button className="arrow right" onClick={next} aria-label="Suivant">
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {cakes.map((cake, i) => (
          <button
            key={cake.id}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
            aria-label={`Aller au gâteau ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CakeCarousel;