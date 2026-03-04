import type { SkillSection } from "@/types/skill-section";

export const skillSection: SkillSection = {
  sectionTitle: {
    fr: "Compétences",
    en: "Skills",
  },
  skills: [
    { name: "Vue.js 3", icon: "vuejs", detail: { fr: "Composition API", en: "Composition API" } },
    {
      name: "TypeScript",
      icon: "typescript",
      detail: { fr: "Typage strict", en: "Strict typing" },
    },
    {
      name: "Architecture Front-End",
      icon: "architecture",
      detail: { fr: "Composants, état, routage", en: "Components, state, routing" },
    },
    {
      name: "DX & Tooling",
      icon: "tooling",
      detail: { fr: "Vite, ESLint, Prettier", en: "Vite, ESLint, Prettier" },
    },
    {
      name: "HTML / CSS",
      icon: "htmlcss",
      detail: { fr: "Sémantique, responsive", en: "Semantic, responsive" },
    },
    {
      name: "Git",
      icon: "git",
      detail: { fr: "Versioning, revue de code", en: "Versioning, code review" },
    },
  ],
};
