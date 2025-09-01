import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'breadcrumb';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Elanswer",
          "description": "AI Automation & Workflow Solutions for Businesses",
          "url": "https://elanswer.com",
          "logo": "https://elanswer.com/favicon.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "customer service",
            "email": "aboutelanswer@gmail.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://linkedin.com/company/elanswer",
            "https://twitter.com/elanswer"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": "1-10",
          "industry": "AI Automation Services"
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Elanswer",
          "description": "Elanswer helps small & medium businesses automate workflows with AI agents, SaaS solutions, and custom automations.",
          "url": "https://elanswer.com"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Automation Services",
          "description": "Professional AI chatbots, voice agents, and workflow automation solutions for businesses",
          "provider": {
            "@type": "Organization",
            "name": "Elanswer",
            "url": "https://elanswer.com"
          },
          "serviceType": "AI Automation",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Starter Plan",
                  "description": "AI Agent for small businesses"
                },
                "price": "399",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "399",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Growth Plan",
                  "description": "Multiple AI Agents for growing teams"
                },
                "price": "899",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "899",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M"
                }
              }
            ]
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "AI Automation Article",
          "description": data?.excerpt || "Learn about AI automation for businesses",
          "author": {
            "@type": "Person",
            "name": data?.author || "Shreyash Jeughale"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Elanswer",
            "logo": {
              "@type": "ImageObject",
              "url": "https://elanswer.com/favicon.png"
            }
          },
          "datePublished": data?.date || new Date().toISOString(),
          "dateModified": data?.date || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://elanswer.com"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
