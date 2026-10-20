import { academy } from "@/config/academy";

export default function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: academy.name,
    alternateName: academy.shortName,
    url: academy.domain,
    description: academy.description,
    email: academy.emails[0],
    telephone: academy.phone.formatted,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    sameAs: Object.values(academy.social).filter((u) => u !== "#"),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: academy.name,
    url: academy.domain,
    publisher: { "@type": "EducationalOrganization", name: academy.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
