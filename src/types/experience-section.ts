import type { Experience } from '@/types/experience.ts'
import type { Localized } from '@/types/localized.ts'

export interface ExperienceSection {
  sectionTitle: Localized<string>
  experiences: Experience[]
}
