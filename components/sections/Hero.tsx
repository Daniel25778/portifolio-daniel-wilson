"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hero, siteConfig } from "@/lib/data";

export default function Hero() {
  const { t } = useLang();
  const data = t(hero);
  const role = t(siteConfig.role);

  const containerRef = useRef<HTMLElement>(null);
  const greetRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Orbs float in
      tl.fromTo(
        orbRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 },
        0
      )
        .fromTo(
          orb2Ref.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4 },
          0.15
        )

        // Badge
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.3
        )

        // Text elements stagger
        .fromTo(
          greetRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.5
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8 },
          0.65
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.8
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.95
        )
        .fromTo(
          ctasRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.1
        );

      // Continuous float for orbs
      gsap.to(orbRef.current, {
        y: "-20px",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2Ref.current, {
        y: "16px",
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 1.5rem 4rem",
      }}
    >
      {/* Background orbs */}
      <div
        ref={orbRef}
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "clamp(260px, 35vw, 520px)",
          height: "clamp(260px, 35vw, 520px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "clamp(180px, 22vw, 360px)",
          height: "clamp(180px, 22vw, 360px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="container-narrow" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Available badge */}
        <div
          ref={badgeRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.35rem 0.9rem",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            fontSize: "0.78rem",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 6px #22c55e",
            }}
          />
          {role} · {siteConfig.location}
        </div>

        {/* Greeting */}
        <p
          ref={greetRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            color: "var(--accent)",
            letterSpacing: "0.1em",
            marginBottom: "0.5rem",
            fontWeight: 500,
          }}
        >
          {data.greeting}
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "var(--text)",
            marginBottom: "1.2rem",
          }}
        >
          Daniel{" "}
          <span
            style={{
              color: "var(--accent)",
              display: "inline-block",
              position: "relative",
            }}
          >
            Wilson
            <svg
              viewBox="0 0 220 12"
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                width: "100%",
                height: "12px",
                overflow: "visible",
              }}
            >
              <path
                d="M2 9 Q55 2 110 8 Q165 14 218 4"
                stroke="var(--accent)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        {/* Tagline */}
        <h2
          ref={taglineRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            fontWeight: 400,
            color: "var(--text-muted)",
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          {data.tagline}
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          style={{
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            fontSize: "1rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
          }}
        >
          {data.description}
        </p>

        {/* CTAs */}
        <div
          ref={ctasRef}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Sparkles size={16} />
            {data.cta}
          </a>
          <a
            href={siteConfig.cvPath}
            onClick={async (e) => {
              e.preventDefault();
              try {
                const response = await fetch(siteConfig.cvPath);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "cv-daniel-wilson-alves.pdf"; // nome do arquivo que o usuário vai baixar
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              } catch {
                // fallback: abre em nova aba
                window.open(siteConfig.cvPath, "_blank");
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Download size={16} />
            {data.ctaSecondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--text-muted)",
            opacity: 0.5,
            animation: "float 2.5s ease-in-out infinite",
          }}
        >
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
