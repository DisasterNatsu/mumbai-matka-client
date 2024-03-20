import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://smartmumbaimatka.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://smartmumbaimatka.in/old-result",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://smartmumbaimatka.in/tips",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://smartmumbaimatka.in/lucky-number",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://smartmumbaimatka.in/patti-chart",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: "https://smartmumbaimatka.in/about",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://smartmumbaimatka.in/privacy",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://smartmumbaimatka.in/log-in",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://smartmumbaimatka.in/register",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
};

export default sitemap;
