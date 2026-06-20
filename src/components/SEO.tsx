import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/favicon-512x512-v3.png', 
  url = window.location.href,
  type = 'website',
  schema
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  const siteName = "Davut Çiftçi | Portfolio";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || t('seo.defaultDescription');
  const metaKeywords = keywords || t('seo.defaultKeywords');

  // Ensure image URL is absolute for Open Graph and Twitter
  const absoluteImage = image.startsWith('http') 
    ? image 
    : `${window.location.origin}${image.startsWith('/') ? '' : '/'}${image}?v=2`;

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>

      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content={i18n.language} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
