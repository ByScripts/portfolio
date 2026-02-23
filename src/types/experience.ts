import type { Localized } from '@/types/localized.ts'

export interface Experience {
  company: string
  role: Localized<string>
  period: string
  location?: string
  type: 'dev' | 'other'
  freelance?: boolean
  remote?: boolean
  description: Localized<string>
  stack?: string[]
}
