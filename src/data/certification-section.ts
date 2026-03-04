import level1Certification from "@/assets/images/certifications/vue-js-level-1-certification.webp";
import level2Certification from "@/assets/images/certifications/vue-js-level-2-certification.webp";
import type { CertificationSection } from "@/types/certification-section.ts";

export const certificationSection: CertificationSection = {
  sectionTitle: {
    fr: "Certifications",
    en: "Certifications",
  },
  certifications: [
    {
      name: "Vue.js Developer Level I",
      date: "2026-01-29",
      src: level1Certification,
      url: "https://certificates.dev/c/a0f3505d-fcbc-4d3b-98cf-cb9e72fcf8c9",
    },
    {
      name: "Vue.js Senior Developer Level II",
      date: "2026-02-06",
      src: level2Certification,
      url: "https://certificates.dev/c/a1033549-aa28-43d9-9efa-9f4aba302588",
    },
  ],
};
