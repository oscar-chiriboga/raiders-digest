import React from 'react';
import Head from 'expo-router/head';

/**
 * SEO Component for Raiders Digest
 * Provides consistent metadata across all pages
 */
export default function SEO({ 
  title = 'Raiders Digest - Arc Raiders Database',
  description = 'Complete database and guides for Arc Raiders. Browse weapons, enemies, loot, quests, traders, maps, and crafting recipes.',
  path = '/',
  image = 'https://raidersdigest.com/assets/images/rd-logo.jpeg'
}) {
  const fullTitle = title.includes('Raiders Digest') ? title : `${title} | Raiders Digest`;
  const url = `https://raidersdigest.com${path}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Raiders Digest" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ff8c00" />
      <meta name="keywords" content="arc raiders, raiders digest, arc raiders database, arc raiders wiki, arc raiders weapons, arc raiders quests, arc raiders enemies, arc raiders loot, arc raiders traders" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
