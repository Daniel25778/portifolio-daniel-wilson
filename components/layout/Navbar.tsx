"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, GitFork, Link2, Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { nav, siteConfig } from "@/lib/data";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = t(nav);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "var(--surface)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.9rem 1.5rem",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          dw<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center"
          style={{
            gap: "2rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            style={{
              padding: "0.35rem 0.65rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
            }}
            aria-label="Toggle language"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                padding: "0.4rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                transition: "all 0.2s",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Social */}
          <a
            className="hidden sm:flex"
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            aria-label="GitHub"
          >
            <GitHub sx={{ fontSize: 20}} />
          </a>
          <a
            className="hidden sm:flex"
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            aria-label="LinkedIn"
          >
             <LinkedIn sx={{ fontSize: 21}} />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: "0.4rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
