import type { Localized } from '@/types/localized.ts'

export interface Skill {
  name: string
  icon: 'architecture' | 'git' | 'htmlcss' | 'tooling' | 'typescript' | 'vuejs'
  detail: Localized<string>
}
