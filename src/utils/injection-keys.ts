import type { SupportedLocale } from "@/types/supported-locale.ts";
import type { InjectionKey } from "vue";

export const IK_LOCALE = Symbol("IK_LOCALE") as InjectionKey<SupportedLocale>;
