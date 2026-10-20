import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Fellipe | Desenvolvedor Backend Java & Fullstack",
  description:
    "Portfolio de Matheus Fellipe Fernandes Lima — desenvolvedor backend Java com Spring Boot, APIs REST, SQL/NoSQL, Next.js e TypeScript. Formado em ADS, cursando Ciência da Computação.",
  keywords: [
    "desenvolvedor java",
    "spring boot",
    "backend java",
    "next.js",
    "typescript",
    "react",
    "fullstack",
    "APIs REST",
    "portfolio",
    "Matheus Fellipe",
  ],
  authors: [{ name: "Matheus Fellipe Fernandes Lima" }],
  openGraph: {
    title: "Matheus Fellipe | Desenvolvedor Backend Java & Fullstack",
    description:
      "Portfolio de Matheus Fellipe — desenvolvedor backend Java com Spring Boot, APIs REST, Next.js e TypeScript.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Matheus Fellipe | Desenvolvedor Backend Java & Fullstack",
    description:
      "Portfolio de Matheus Fellipe — desenvolvedor backend Java com Spring Boot, APIs REST, Next.js e TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
