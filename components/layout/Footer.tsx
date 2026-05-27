"use client";

import { useLang } from "@/lib/lang";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {lang === "pt"
          ? `© ${new Date().getFullYear()} ${siteConfig.name} — Feito com Next.js & GSAP`
          : `© ${new Date().getFullYear()} ${siteConfig.name} — Built with Next.js & GSAP`}
      </p>
    </footer>
  );
}
