export const SITE_EMAIL = "ahmadzia.devs@gmail.com";

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
