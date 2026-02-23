import type { SupportedLocale } from '@/types/supported-locale'

export type Localized<TType> = Record<SupportedLocale, TType>
