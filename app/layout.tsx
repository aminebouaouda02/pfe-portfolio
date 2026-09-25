import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amine Bouaouda — Aspiring AI Engineer & Big Data / IoT Specialist | ENSAM Casablanca",
  description:
    "Portfolio of Amine Bouaouda: Master's student in Big Data & IoT at ENSAM Casablanca, aspiring AI Engineer specializing in distributed systems, machine learning pipelines, Flutter, and IoT solutions.",
  keywords: [
    "Amine Bouaouda",
    "AI Engineer",
    "Big Data Engineer",
    "ENSAM Casablanca",
    "Hadoop",
    "Apache Spark",
    "Apache Kafka",
    "IoT",
    "Flutter",
    "Python",
    "Machine Learning",
    "Software Engineering",
  ],
  authors: [{ name: "Amine Bouaouda" }],
  creator: "Amine Bouaouda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aminebouaouda02.github.io",
    title: "Amine Bouaouda — Aspiring AI Engineer | Big Data & IoT @ ENSAM Casablanca",
    description: "Distributed Big Data architectures, machine learning pipelines, IoT systems, and high-performance software engineering.",
    siteName: "Amine Bouaouda Portfolio",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
