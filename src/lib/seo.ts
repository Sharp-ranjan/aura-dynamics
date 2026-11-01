export interface SiteMetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export const SITE_URL = "https://auradynamics.in";
export const BRAND_NAME = "Aura Dynamics Enterprises Private Limited";
export const BRAND_SHORT = "Aura Dynamics";
export const BRAND_TAGLINE = "Empowering India's Digital Future — Multi-Service Holding Enterprise";
export const HEADQUARTERS_CITY = "Patna";
export const HEADQUARTERS_STATE = "Bihar";
export const HEADQUARTERS_COUNTRY = "India";

export function createPageMeta({
  title,
  description,
  canonicalPath = "/",
  type = "website",
}: SiteMetaOptions) {
  const fullTitle = title.includes(BRAND_SHORT) ? title : `${title} | ${BRAND_SHORT}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "application-name", content: BRAND_NAME },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: "Patna" },
      { property: "og:site_name", content: BRAND_NAME },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

/**
 * Validated Schema.org Structured Data Generators
 */
export function getCorporateSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_URL}#organization`,
    name: BRAND_NAME,
    alternateName: ["Aura Dynamics", "Strategic Ventures Group"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "A premier multi-service digital aggregator holding enterprise and proprietary technology incubator pioneering next-generation technological frameworks across PAN-India.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: HEADQUARTERS_CITY,
        addressRegion: HEADQUARTERS_STATE,
        addressCountry: HEADQUARTERS_COUNTRY,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commercial Corporate Hub",
      addressLocality: HEADQUARTERS_CITY,
      addressRegion: HEADQUARTERS_STATE,
      addressCountry: HEADQUARTERS_COUNTRY,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Corporate Inquiries",
        email: "corporate@auradynamics.in",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    knowsAbout: [
      "Digital Platform Aggregation",
      "Multi-Service Consumer Ecosystems",
      "Technology Incubation",
      "Gig-Economy Socio-Economic Enablement",
      "Distributed Cloud Architecture",
    ],
  };
}

export function getBreadcrumbSchemaJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
