import { type MaybeRefOrGetter, type ComputedRef, toRef, computed } from 'vue'

export function useVariants(
  propsMRG: MaybeRefOrGetter<Record<string, string | boolean | undefined>>,
): ComputedRef<string[]> {
  const props = toRef(propsMRG)

  return computed(() =>
    Object.entries(props.value).flatMap(([key, value]) => {
      if (value === undefined || value === false) {
        return []
      }

      if (value === true) {
        return [`is--${key}`]
      }

      return [`${key}--${value}`]
    }),
  )
}
