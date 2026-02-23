import type { Localized } from '@/types/localized.ts'
import type { SupportedLocale } from '@/types/supported-locale'
import { toRef, type MaybeRefOrGetter } from 'vue'

export function useLocalize<TLocale extends SupportedLocale>(localeMRG: MaybeRefOrGetter<TLocale>) {
  const locale = toRef(localeMRG)

  return function localize<TData extends Localized<unknown>>(data: TData): TData[SupportedLocale] {
    return data[locale.value]
  }
}
