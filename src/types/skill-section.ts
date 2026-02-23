import type { Localized } from '@/types/localized.ts'
import type { Skill } from '@/types/skill.ts'

export interface SkillSection {
  sectionTitle: Localized<string>
  skills: Skill[]
}
