import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunMemories — Poster Personnalisé de Course à Pied | GPX, Marathon, Trail",
  description:
    "Créez un poster personnalisé de votre course à pied en 3 minutes. Importez votre tracé GPX depuis Strava, personnalisez le design, et recevez votre affiche imprimée sous 48h. Marathon, trail, ultra, triathlon.",
  keywords: [
    "poster course à pied personnalisé",
    "affiche marathon personnalisée",
    "poster GPX personnalisé",
    "cadeau coureur original",
    "affiche Strava personnalisée",
    "poster trail running",
    "souvenir marathon impression",
    "affiche parcours running",
    "poster ultra trail",
    "cadeau running original",
    "imprimer tracé GPX",
    "poster triathlon",
    "affiche course pied cadeau",
    "RunMemories",
  ],
  authors: [{ name: "RunMemories" }],
  creator: "RunMemories",
  publisher: "RunMemories",
  metadataBase: new URL("https://runmemories.com"),
  alternates: {
    canonical: "https://runmemories.com",
  },
  openGraph: {
    title: "RunMemories — Poster Personnalisé de Course à Pied",
    description:
      "Importez votre GPX depuis Strava, personnalisez votre poster et recevez-le en 48h. Marathon, trail, ultra — immortalisez chaque exploit en œuvre d'art.",
    url: "https://runmemories.com",
    siteName: "RunMemories",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://runmemories.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RunMemories — Posters personnalisés de course à pied",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RunMemories — Poster Personnalisé de Course à Pied",
    description:
      "Importez votre GPX, personnalisez et commandez. Impression premium sous 48h.",
    images: ["https://runmemories.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://runmemories.com/#website",
        "url": "https://runmemories.com",
        "name": "RunMemories",
        "description": "Posters personnalisés de course à pied — GPX, Marathon, Trail",
        "inLanguage": "fr-FR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://runmemories.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://runmemories.com/#organization",
        "name": "RunMemories",
        "url": "https://runmemories.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://runmemories.com/logo.png",
        },
        "sameAs": [
          "https://www.instagram.com/runmemoriess/",
          "https://www.linkedin.com/company/run-memories",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "French",
        },
      },
      {
        "@type": "Product",
        "@id": "https://runmemories.com/#product",
        "name": "Poster personnalisé de course à pied",
        "description": "Créez un poster unique à partir de votre tracé GPX Strava. Personnalisable, imprimé sur papier premium, livré sous 48h.",
        "brand": { "@type": "Brand", "name": "RunMemories" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "url": "https://app.runmemories.com",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "847",
          "bestRating": "5",
        },
      },
    ],
  };

  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-443431929" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-443431929');
        `}} />
      </head>
      <body className="antialiased bg-[#111] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
