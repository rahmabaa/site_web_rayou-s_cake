const CREATOR_NAME = "Web Studio TN";
const CREATOR_URL = "https://www.instagram.com/web.studio.tn/";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">Rayou's Cake</p>
      <p>Made with love</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Rayou's Cake. Tous droits réservés.
      </p>
      <p className="footer-author">
        Site conçu et développé par{" "}
        <a href={CREATOR_URL} target="_blank" rel="noopener noreferrer">
          {CREATOR_NAME}
        </a>
      </p>
    </footer>
  );
}

export default Footer;