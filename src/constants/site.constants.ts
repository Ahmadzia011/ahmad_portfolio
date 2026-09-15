export const SITE_EMAIL = "ahmadzia.devs@gmail.com";
export const SITE_WHATSAPP_NUMBER = "+92 327 9683075";
export const SITE_WHATSAPP_URL = "https://wa.me/923279683075";

export const NAV_LINKS = [
  { label: "About", href: "/#hero-section" },
  { label: "Services", href: "/#services-section" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact-section" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  ...NAV_LINKS,
] as const;
