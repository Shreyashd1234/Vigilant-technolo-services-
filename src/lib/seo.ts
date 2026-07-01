export function seo({
  title,
  description,
  path = "",
  image = "https://vigilant.tech/og-image.jpg",
  schema,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schema?: any;
}) {
  const url = `https://vigilant.tech${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  const links = [
    { rel: "canonical", href: url }
  ];
  const scripts = schema ? [
    {
      type: "application/ld+json",
      children: JSON.stringify(schema)
    }
  ] : [];

  return { meta, links, scripts };
}
