import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { SITE_URL, units, faq } from "./data";

const title = "Colégio em Tangará da Serra | Educação Infantil ao Ensino Médio | Avance";
const description =
  "Colégio Avance em Tangará da Serra (MT): Educação Infantil, Ensino Fundamental e Ensino Médio com Sistema COC, ensino bilíngue e robótica. Rematrículas 2027 abertas. Agende sua visita.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: [
    "colégio em Tangará da Serra",
    "escola em Tangará da Serra",
    "Avance Colégio e Cursos",
    "Avance Júnior",
    "Educação Infantil Tangará da Serra",
    "Ensino Médio Tangará da Serra",
    "escola bilíngue Tangará da Serra",
    "Sistema COC",
    "rematrículas 2027",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Avance Colégio e Cursos",
    title,
    description,
    images: [{ url: "/img/hero-junior-medalhas.webp", width: 1200, height: 600, alt: "Alunos do Avance Júnior com medalhas no palco" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/img/hero-junior-medalhas.webp"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#14224a", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...units.map((u) => ({
      "@type": "School",
      "@id": `${SITE_URL}/#${u.slug}`,
      name: u.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-colegio-cor.webp`,
      image: `${SITE_URL}/img/hero-junior-medalhas.webp`,
      description: u.serves,
      telephone: u.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: u.street,
        addressLocality: "Tangará da Serra",
        addressRegion: "MT",
        addressCountry: "BR",
      },
      sameAs: [u.instagram],
    })),
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
