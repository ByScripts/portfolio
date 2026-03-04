import { inject } from "vue";

import type { Localized } from "@/types/localized.ts";
import type { SupportedLocale } from "@/types/supported-locale";
import { IK_LOCALE } from "@/utils/injection-keys.ts";

export function useLocalize() {
  const locale = inject(IK_LOCALE);

  if (!locale) {
    throw new Error("useLocalize must be used within a component that provides the locale");
  }

  const localize = <TData extends Localized<unknown>>(data: TData): TData[SupportedLocale] =>
    data[locale];

  return {
    localize,
    locale,
  };
}
