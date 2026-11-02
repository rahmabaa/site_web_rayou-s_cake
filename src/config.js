export const WHATSAPP_NUMBER = "21690114805"; // indicatif 216 + numéro, sans + ni espaces
export const PHONE_DISPLAY = "90 114 805";
export const PHONE_LINK = "+21690114805";
export const INSTAGRAM_URL = "https://www.instagram.com/rayouscake.patisserie";
export const FACEBOOK_URL = "https://www.facebook.com/p/Rayous-cake-61556629792797/"; // à remplacer par le lien de ta page

export const buildWhatsAppLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = buildWhatsAppLink(
    "Bonjour Rayou's Cake 🎂, je souhaite passer une commande."
);