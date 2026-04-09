import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunMemories — Posters Personnalisés de Course à Pied",
  description:
    "Transformez vos courses en oeuvres d'art. Importez votre GPX depuis Strava, personnalisez votre poster et recevez-le chez vous. Marathon, trail, ultra — immortalisez chaque exploit.",
  keywords: [
    "affiche course à pied personnalisée",
    "poster marathon personnalisé",
    "affiche GPX",
    "souvenir running",
    "poster Strava",
    "cadeau coureur",
    "affiche trail",
    "personnaliser parcours course",
  ],
  authors: [{ name: "RunMemories" }],
  creator: "RunMemories",
  openGraph: {
    title: "RunMemories — Posters Personnalisés de Course à Pied",
    description:
      "Transformez vos courses en oeuvres d'art. Importez votre GPX, personnalisez et commandez.",
    url: "https://runmemories.com",
    siteName: "RunMemories",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunMemories — Posters Personnalisés de Course à Pied",
    description:
      "Transformez vos courses en oeuvres d'art. Importez votre GPX, personnalisez et commandez.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="antialiased bg-[#111] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
