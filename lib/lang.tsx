"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: <T extends { en: unknown; pt: unknown }>(obj: T) => T["en"];
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  const t = <T extends { en: unknown; pt: unknown }>(obj: T): T["en"] =>
    obj[lang] as T["en"];

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
