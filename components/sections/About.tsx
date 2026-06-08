"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
import { about, siteConfig } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useLang();
  const data = t(about);

  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        textRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-wide">
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            marginBottom: "2rem",
            textTransform: "uppercase",
          }}
          className="mb-8 md:mb-12"
        >
          — {data.title}
        </p>

        <div
          style={{
            display: "grid",
            alignItems: "start",
          }}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16"
        >
          {/* Left: Photo + info */}
          <div ref={imgRef}>
            {/* Photo placeholder */}
            <div
              style={{
                width: "100%",
                height: '30rem',
                borderRadius: "20px",
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
                position: "relative",
                marginBottom: "1.5rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
                unoptimized // Required for static export on Vercel/GitHub Pages
              />
            </div>

            {/* Quick info */}
            <div
              className="surface-card"
              style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <MapPin size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {siteConfig.location}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <Mail size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <a href={`mailto:${siteConfig.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div ref={textRef}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            >
              {t({ en: "Crafting quality", pt: "Construindo qualidade" })}{" "}
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
                {t({ en: "line by line.", pt: "linha por linha." })}
              </span>
            </h2>

            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                {p}
              </p>
            ))}

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gap: "1rem",
                marginTop: "2.5rem",
              }}
              className="grid grid-cols-1 sm:grid-cols-3"
            >
              {[
                { value: "4+", label: t({ en: "years exp.", pt: "anos de exp." }) },
                { value: "70+", label: t({ en: "components", pt: "componentes" }) },
                { value: "10+", label: t({ en: "API integrations", pt: "integrações API" }) },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="surface-card"
                  style={{ padding: "1rem", textAlign: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
