import type { Certification } from "@/types/certification.ts";
import type { Localized } from "@/types/localized.ts";

export interface CertificationSection {
  sectionTitle: Localized<string>;
  certifications: Certification[];
}
