import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LangProvider } from "@/lib/lang";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Daniel Wilson — Front-End Developer",
  description:
    "Portfolio of Daniel Wilson Alves dos Santos — Front-End Developer specialised in React, Next.js and TypeScript.",
  keywords: ["Front-End", "React", "Next.js", "TypeScript", "Clean Architecture"],
  authors: [{ name: "Daniel Wilson Alves dos Santos" }],
  openGraph: {
    title: "Daniel Wilson — Front-End Developer",
    description: "Portfolio of Daniel Wilson Alves dos Santos",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
