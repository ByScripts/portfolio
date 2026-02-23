<script lang="ts" setup>
import type { SupportedLocale } from "@/types/supported-locale.ts";
import { useHead } from "@unhead/vue";
import { profile } from "@/data/profile.ts";
import { useLocalize } from "@/composables/use-localize";
import HeaderSection from "@/components/sections/HeaderSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import CertificationsSection from "@/components/sections/CertificationsSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";

const { locale } = defineProps<{
  locale: SupportedLocale;
}>();

const localize = useLocalize(() => locale);

useHead({
  htmlAttrs: { lang: () => locale },
  title: () => `${profile.name} — ${localize(profile.title)} | ${localize(profile.description)}`,
  meta: [
    {
      name: "description",
      content: () => `${localize(profile.title)} | ${localize(profile.description)}`,
    },
    { name: "og:title", content: `${profile.name} | ${localize(profile.title)}` },
    {
      name: "og:description",
      content: () => localize(profile.description),
    },
  ],
});
</script>

<template>
  <HeaderSection :locale />
  <main>
    <AboutSection :locale />
    <SkillsSection :locale />
    <CertificationsSection :locale />
    <ExperienceSection :locale />
  </main>
  <FooterSection />
</template>
