"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
import { contact, siteConfig } from "@/lib/data";
import { Mail, Link2, GitFork, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t } = useLang();
  const data = t(contact);
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    {
      icon: <Mail size={20} />,
      label: siteConfig.email,
      href: `https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`,
    },
    {
      icon: <Link2 size={20} />,
      label: "linkedin.com/in/danielwilsonalves",
      href: siteConfig.linkedin,
    },
    {
      icon: <GitFork size={20} />,
      label: "github.com/Daniel25778",
      href: siteConfig.github,
    },
    {
      icon: <Phone size={20} />,
      label: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-narrow">
        <div ref={innerRef}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            — {t({ en: "Contact", pt: "Contato" })}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            {data.title}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              marginBottom: "3rem",
            }}
          >
            {data.subtitle}
          </p>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "3rem",
            }}
          >
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                  el.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateX(0)";
                }}
              >
                <span style={{ color: "var(--accent)" }}>{s.icon}</span>
                <span style={{ color: "var(--text-muted)" }}>{s.label}</span>
              </a>
            ))}
          </div>

          {/* Main CTA */}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2rem",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 6px 30px var(--accent-glow)",
              transition: "opacity 0.2s, transform 0.2s",
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
            <Mail size={18} />
            {data.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
