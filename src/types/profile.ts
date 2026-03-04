import type { Localized } from "@/types/localized.ts";

export interface Profile {
  name: string;
  title: Localized<string>;
  description: Localized<string>;
  location: string;
  email: string;
  socials: {
    name: string;
    url: string;
    icon: "linkedin" | "github";
  }[];
}
