"use client";

import { useRef, useState, useEffect } from "react";
import { useLang } from "@/lib/lang";
import { education } from "@/lib/data";
import { GraduationCap, Award, ExternalLink, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 280; // Reduzido para melhor encaixe em telas mobile
  const GAP = 16; // 1rem

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const step = CARD_WIDTH + GAP;
      const scrollTo =
        direction === "left"
          ? scrollRef.current.scrollLeft - step
          : scrollRef.current.scrollLeft + step;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    const idx = Math.round(scrollLeft / (CARD_WIDTH + GAP));
    setActiveIndex(idx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const total = education.complementary.length;

  return (
    <section id="education" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="container-wide">
        {/* Label */}
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
          — {t({ en: "Education", pt: "Formação" })}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "3.5rem",
            lineHeight: 1.1,
          }}
        >
          {t({ en: "Academic & Certifications", pt: "Acadêmico & Certificações" })}
        </h2>

        {/* ── Degrees (full width, two columns on lg) ─────────────────── */}
        <div>
          <h3 style={{marginBottom: '1rem'}} className="flex items-center gap-2 text-lg font-bold mb-6 text-text">
            <GraduationCap className="text-accent" />
            {t({ en: "Degrees", pt: "Graduações" })}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {education.main.map((edu, idx) => (
              <div
                key={idx}
                className="surface-card flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                style={{ padding: "2rem" }}
              >
                <div className="w-20 h-20 relative rounded-2xl overflow-hidden bg-white flex-shrink-0 border border-border shadow-sm p-2">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-cover"
                    unoptimized={edu.logo.startsWith("http")}
                  />
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 gap-2">
                    <h4 className="font-bold text-text">{edu.institution}</h4>
                    <span className="text-xs font-mono text-accent">{edu.period}</span>
                  </div>
                  <p className="text-sm text-text-muted mb-5 leading-relaxed">{t(edu.degree)}</p>
                  {edu.certificateUrl && (
                    <a
                      href={edu.certificateUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <FileText size={14} />
                      {t({ en: "View Certificate", pt: "Ver Certificado" })}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Courses Carousel (full-width horizontal) ─────────────────── */}
        <div>
          {/* Header row */}
          <div style={{marginTop: '1rem', marginBottom: '1rem'}} className="flex items-center justify-between mt-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-text">
              <Award className="text-accent" />
              {t({ en: "Courses & Certifications", pt: "Cursos & Certificações" })}
            </h3>

            <div className="flex items-center gap-3">
              {/* Progress indicator */}
              <span className="hidden sm:block text-xs font-mono text-text-muted">
                {activeIndex + 1} / {total}
              </span>

              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-2 rounded-xl border border-border hover:bg-bg-secondary text-text-muted hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-2 rounded-xl border border-border hover:bg-bg-secondary text-text-muted hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 scroll-smooth" // Removido gap-4 para usar marginRight explícito
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {education.complementary.map((course, idx) => (
              <div
                key={idx}
                style={{ // Adicionado marginRight para espaçamento entre os cartões
                  flex: `0 0 ${CARD_WIDTH}px`,
                  scrollSnapAlign: "start",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg-secondary, var(--surface))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  marginRight: idx === education.complementary.length - 1 ? '0' : `${GAP}px`, // Adiciona margem à direita, exceto no último
                  minHeight: "130px",
                }}
                className="group hover:border-accent/50"
              >
                {/* Top: name + provider */}
                <div>
                  <p
                    className="font-semibold text-text leading-snug mb-1"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {t(course.name)}
                  </p>
                  <p
                    className="text-text-muted"
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {course.provider}
                  </p>
                </div>

                {/* Bottom: year + cert link */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-accent font-mono"
                    style={{
                      fontSize: "0.72rem",
                      background: "var(--accent-subtle, color-mix(in srgb, var(--accent) 12%, transparent))",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                    }}
                  >
                    {course.year}
                  </span>

                  {course.certificateUrl ? (
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={13} />
                      {t({ en: "Certificate", pt: "Certificado" })}
                    </a>
                  ) : (
                    <span className="text-xs text-text-muted opacity-40">
                      {t({ en: "No certificate", pt: "Sem certificado" })}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div style={{marginTop: '1rem'}} className="flex justify-center gap-1.5 mt-5">
            {education.complementary.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    left: idx * (CARD_WIDTH + GAP),
                    behavior: "smooth",
                  });
                }}
                aria-label={`Go to course ${idx + 1}`}
                style={{
                  width: idx === activeIndex ? "1.5rem" : "0.4rem",
                  height: "0.4rem",
                  borderRadius: "999px",
                  background:
                    idx === activeIndex ? "var(--accent)" : "var(--border)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}