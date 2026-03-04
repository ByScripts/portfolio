<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import { profile } from "@/data/profile.ts";
import { useLocalize } from "@/composables/use-localize";
import HeaderSection from "@/components/sections/HeaderSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import CertificationsSection from "@/components/sections/CertificationsSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";

const { localize, locale } = useLocalize();

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
  <HeaderSection />
  <main>
    <AboutSection />
    <SkillsSection />
    <CertificationsSection />
    <ExperienceSection />
  </main>
  <FooterSection />
</template>
