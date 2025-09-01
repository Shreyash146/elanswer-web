import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Elanswer – AI Automation & Workflow Solutions for Businesses",
  description = "Elanswer helps small & medium businesses automate workflows with AI agents, SaaS solutions, and custom automations. Save time, boost sales, and scale smarter.",
  keywords = "AI automation, workflow automation, AI chatbots, voice AI, business automation, SaaS solutions, customer service automation, small business AI",
  image = "https://elanswer.com/og-image.png",
  url = "https://elanswer.com",
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonical
}) => {
  const fullTitle = title.includes('Elanswer') ? title : `${title} | Elanswer`;
  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || "Elanswer"} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Elanswer AI Automation Solutions`} />
      <meta property="og:site_name" content="Elanswer" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} - Elanswer AI Automation Solutions`} />
      <meta name="twitter:creator" content="@elanswer" />
      <meta name="twitter:site" content="@elanswer" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4f46e5" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="application-name" content="Elanswer" />
      <meta name="apple-mobile-web-app-title" content="Elanswer" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Elanswer",
          "description": "AI Automation & Workflow Solutions for Businesses",
          "url": "https://elanswer.com",
          "logo": "https://elanswer.com/favicon.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "aboutelanswer@gmail.com"
          },
          "sameAs": [
            "https://linkedin.com/company/elanswer",
            "https://twitter.com/elanswer"
          ],
          "foundingDate": "2024",
          "industry": "AI Automation Services"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
