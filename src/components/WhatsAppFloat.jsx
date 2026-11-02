import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../config";

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Commander sur WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloat;