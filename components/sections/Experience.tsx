"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-narrow">
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
          — {t({ en: "Experience", pt: "Experiência" })}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "3rem",
            lineHeight: 1.1,
          }}
        >
          {t({ en: "Where I've worked", pt: "Onde trabalhei" })}
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => { if (el) itemsRef.current[i] = el; }}
                style={{
                  paddingLeft: "3.5rem",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "9px",
                    top: "18px",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "var(--bg)",
                    border: "2px solid",
                    borderColor: i === 0 ? "var(--accent)" : "var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  {i === 0 && (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="surface-card" style={{ padding: "1.5rem 1.75rem" }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {t(exp.role)}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.4rem" }}>
                        <Briefcase size={13} style={{ color: "var(--accent)" }} />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--accent)",
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </span>
                        <span style={{ color: "var(--border)" }}>·</span>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {t(exp.type)}
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {t(exp.bullets).map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.65rem",
                          fontSize: "0.875rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: "0.05em",
                          }}
                        >
                          ›
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
