import { site } from "@/lib/content";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      sameAs: [site.github],
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.tagline,
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
