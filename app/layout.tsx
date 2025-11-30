import type { Metadata } from "next";
import { Merriweather, Open_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NEXUS - Actualité Scientifique",
  description: "Découvrez les dernières avancées scientifiques et technologiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body
        className={`${merriweather.variable} ${openSans.variable} ${spaceGrotesk.variable} antialiased font-display bg-white dark:bg-[#101a22] text-gray-800 dark:text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
