function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">Rayou's Cake</p>
      <p>Made with love</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Rayou's Cake. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;