import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import "../globals.css";

const metaByLocale: Record<string, Metadata> = {
  fr: {
    title: "Affiche Personnalisée Course à Pied | Poster Marathon, Trail — RunMemories",
    description:
      "Créez une affiche personnalisée de votre course à pied en 5 minutes. Importez votre tracé GPX depuis Strava, personnalisez le design, téléchargez votre PDF 9€. Marathon, trail, ultra.",
    keywords: [
      "affiche personnalisée course à pied",
      "poster personnalisé marathon",
      "affiche GPX personnalisée",
      "poster trail running personnalisé",
      "cadeau coureur original",
      "affiche Strava personnalisée",
      "poster marathon personnalisé",
      "affiche parcours running",
      "poster ultra trail",
      "cadeau running original",
      "imprimer tracé GPX",
      "poster triathlon personnalisé",
      "affiche course pied cadeau",
      "RunMemories",
    ],
  },
  en: {
    title: "Personalised Running Poster | GPX, Marathon, Trail — RunMemories",
    description:
      "Create a personalised running poster in 5 minutes. Import your GPX trace from Strava, customise your design, download your PDF for €9. Marathon, trail, ultra.",
    keywords: [
      "personalised running poster",
      "custom marathon poster",
      "GPX poster personalised",
      "trail running poster",
      "runner gift idea",
      "Strava poster",
      "marathon print personalised",
      "running route poster",
      "ultra trail poster",
      "RunMemories",
    ],
  },
  es: {
    title: "Póster Personalizado de Running | GPX, Maratón, Trail — RunMemories",
    description:
      "Crea un póster personalizado de tu carrera en 5 minutos. Importa tu traza GPX desde Strava, personaliza el diseño, descarga tu PDF por 9€. Maratón, trail, ultra.",
    keywords: [
      "póster personalizado running",
      "affiche personnalisée course à pied",
      "poster maratón personalizado",
      "póster trail running",
      "regalo corredor original",
      "póster Strava",
      "RunMemories",
    ],
  },
  it: {
    title: "Poster Personalizzato Corsa | GPX, Maratona, Trail — RunMemories",
    description:
      "Crea un poster personalizzato della tua corsa in 5 minuti. Importa la tua traccia GPX da Strava, personalizza il design, scarica il tuo PDF a 9€. Maratona, trail, ultra.",
    keywords: [
      "poster personalizzato corsa",
      "affiche personnalisée course à pied",
      "poster maratona personalizzato",
      "poster trail running",
      "regalo corridore",
      "poster GPX",
      "RunMemories",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] ?? metaByLocale.fr;

  return {
    ...meta,
    authors: [{ name: "RunMemories" }],
    creator: "RunMemories",
    publisher: "RunMemories",
    metadataBase: new URL("https://runmemories.com"),
    alternates: {
      canonical: locale === "fr" ? "https://runmemories.com" : `https://runmemories.com/${locale}`,
      languages: {
        fr: "https://runmemories.com",
        en: "https://runmemories.com/en",
        es: "https://runmemories.com/es",
        it: "https://runmemories.com/it",
      },
    },
    openGraph: {
      title: typeof meta.title === "string" ? meta.title : "RunMemories",
      description: meta.description ?? "",
      url: locale === "fr" ? "https://runmemories.com" : `https://runmemories.com/${locale}`,
      siteName: "RunMemories",
      locale: locale === "fr" ? "fr_FR" : locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "it_IT",
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
      title: typeof meta.title === "string" ? meta.title : "RunMemories",
      description: meta.description ?? "",
      images: ["https://runmemories.com/og-image.jpg"],
    },
    verification: {
      google: "rDRjvQ9KIJP5i_CGHDMttL45bhkKQDOJZ3RrW8Oe4zk",
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

  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://runmemories.com/#website",
        url: "https://runmemories.com",
        name: "RunMemories",
        description: "Affiches personnalisées de course à pied — GPX, Marathon, Trail",
        inLanguage: locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "it-IT",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://runmemories.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://runmemories.com/#organization",
        name: "RunMemories",
        url: "https://runmemories.com",
        logo: {
          "@type": "ImageObject",
          url: "https://runmemories.com/logo.png",
        },
        sameAs: [
          "https://www.instagram.com/runmemoriess/",
          "https://www.linkedin.com/company/run-memories",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["French", "English", "Spanish", "Italian"],
        },
      },
      {
        "@type": "Product",
        "@id": "https://runmemories.com/#product",
        name: "Affiche personnalisée de course à pied",
        description:
          "Créez une affiche unique à partir de votre tracé GPX Strava. Personnalisable, téléchargement PDF haute résolution instantané.",
        brand: { "@type": "Brand", name: "RunMemories" },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "9.00",
          availability: "https://schema.org/InStock",
          url: "https://app.runmemories.com",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "847",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <html lang={locale} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-443431929');
        `,
          }}
        />
      </head>
      <body className="antialiased bg-[#111] text-white min-h-screen">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
