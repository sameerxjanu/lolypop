import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lolypop.agency',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add more routes here as the site grows
    ]
}
