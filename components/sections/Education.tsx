"use client";

import { useLang } from "@/lib/lang";
import { education } from "@/lib/data";
import { GraduationCap, Award, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="section-padding" style={{ background: "var(--bg)" }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Path */}
          <div className="mt-6 gap-6 flex flex-col">
            <h3 className="flex items-center gap-2 text-lg font-bold mb-8 text-text">
              <GraduationCap className="text-accent" />
              {t({ en: "Degrees", pt: "Graduações" })}
            </h3>
            <div className="space-y-8 gap-6 flex flex-col">
              {education.main.map((edu, idx) => (
                <div key={idx} className="surface-card flex flex-col sm:flex-row gap-6 items-center sm:items-start" style={{ padding: "2rem" }}>
                  <div className="w-20 h-20 relative rounded-2xl overflow-hidden bg-white flex-shrink-0 border border-border shadow-sm p-2">
                    <Image 
                      src={edu.logo} 
                      alt={edu.institution} 
                      fill 
                      className="object-cover" 
                      unoptimized={edu.logo.startsWith('http')}
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

          {/* Complementary Path */}
          <div className="flex flex-col gap-6">
            <h3 className="flex items-center gap-2 text-lg font-bold mb-8 text-text">
              <Award className="text-accent" />
              {t({ en: "Courses", pt: "Cursos" })}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {education.complementary.map((course, idx) => (
                <div 
                  key={idx} 
                  className="surface-card flex items-center justify-between gap-4 group hover:border-accent/50 transition-colors"
                  style={{ padding: "1.5rem" }}
                >
                  <div className="overflow-hidden">
                    <p className="font-bold text-sm text-text truncate">{t(course.name)}</p>
                    <p className="text-[11px] text-text-muted uppercase tracking-wider">
                      {course.provider} • {course.year}
                    </p>
                  </div>
                  {course.certificateUrl && (
                    <a 
                      href={course.certificateUrl} 
                      target="_blank" 
                      className="p-2 rounded-lg bg-bg-secondary text-text-muted hover:text-accent transition-colors"
                      title={t({ en: "View Certificate", pt: "Ver Certificado" })}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}