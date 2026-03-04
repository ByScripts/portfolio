import type { Localized } from "@/types/localized.ts";

export interface AboutSection {
  sectionTitle: Localized<string>;
  content: Localized<string[]>;
}
