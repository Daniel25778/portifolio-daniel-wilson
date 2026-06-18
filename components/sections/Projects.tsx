"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
import { projects } from "@/lib/data";
import { ExternalLink, GitFork, Star } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = projects.filter((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: featuredRef.current, start: "top 80%" },
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-wide">
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
          — {t({ en: "Projects", pt: "Projetos" })}
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
          {t({ en: "Selected work", pt: "Trabalhos selecionados" })}
        </h2>

        {/* Featured projects */}
        {featured.map((project) => (
          <div
            key={project.slug}
            ref={featuredRef}
            className="surface-card grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: "0",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div
              style={{
                background: "var(--bg-secondary)",
                minHeight: "340px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* REPLACE with your screenshot */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.image}`}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>

              {/* Featured badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                }}
              >
                <Star size={11} />
                {t({ en: "Featured", pt: "Destaque" })}
              </div>
            </div>

            {/* Content */}
            <div  className="flex flex-col">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  marginTop: "0.75rem",
                  marginLeft: "1rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                   marginLeft: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                {t(project.longDescription)}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                   marginLeft: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                       marginLeft: "1rem",
                      padding: "0.55rem 1.1rem",
                      borderRadius: "8px",
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    <ExternalLink size={14} />
                    {t({ en: "Live site", pt: "Ver site" })}
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.55rem 1.1rem",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      color: "var(--text)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <GitFork size={14} />
                    {t({ en: "Repository", pt: "Repositório" })}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Grid of other projects */}
        {grid.length > 0 && (
          <>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                marginTop: "1rem",
              }}
            >
              {t({ en: "Other projects", pt: "Outros projetos" })}
            </h3>
            <div
              ref={gridRef}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {grid.map((project) => (
                <div
                  key={project.slug}
                  className="surface-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    cursor: "default",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text)",
                    }}
                  >
                    {project.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {t(project.description)}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.25rem" }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.8rem",
                          color: "var(--accent)",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        <ExternalLink size={13} />
                        {t({ en: "Live", pt: "Ver" })}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        <GitFork size={13} />
                        Repo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Add project hint */}
        
      </div>
    </section>
  );
}
