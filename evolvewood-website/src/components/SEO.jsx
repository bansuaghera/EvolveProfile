import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
    const siteTitle = 'EvolveWood - Eco-Industrial Recycled Material Manufacturer';

    return (
        <Helmet>
            <title>{title ? `${title} | EvolveWood` : siteTitle}</title>
            <meta name="description" content={description || "Premium eco-industrial recycled materials and packaging solutions. Waterproof, durable, and sustainable alternatives to wood."} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || "Premium eco-industrial recycled materials and packaging solutions."} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}
