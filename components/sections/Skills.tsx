"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";
import { skillGroups } from "@/lib/data";
import { Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
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
          — {t({ en: "Skills", pt: "Habilidades" })}
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
          {t({ en: "Tech stack & tools", pt: "Stack & ferramentas" })}
        </h2>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.label.en}
              className="surface-card"
              style={{ padding: "1.5rem" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {t(group.label)}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill.name} url={skill.url} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({ skill, url }: { skill: string; url: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="tag flex items-center gap-1.5 no-underline hover:text-accent"
      style={{ cursor: "pointer", transition: "all 0.2s" }}
      onMouseEnter={() => {
        if (ref.current) {
          gsap.to(ref.current, { scale: 1.08, duration: 0.2 });
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          gsap.to(ref.current, { scale: 1, duration: 0.2 });
        }
      }}
    >
      <Code2 size={12} className="opacity-70" />
      {skill}
    </a>
  );
}
