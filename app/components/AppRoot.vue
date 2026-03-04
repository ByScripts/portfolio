<script lang="ts" setup>
const { localize, locale } = useLocalize()

useHead({
  htmlAttrs: { lang: () => locale },
  title: () =>
    `${profile.name} — ${localize(profile.title)} | ${localize(profile.description)}`,
  meta: [
    {
      name: 'description',
      content: () =>
        `${localize(profile.title)} | ${localize(profile.description)}`,
    },
    {
      name: 'og:title',
      content: `${profile.name} | ${localize(profile.title)}`,
    },
    {
      name: 'og:description',
      content: () => localize(profile.description),
    },
  ],
})
</script>

<template>
  <SectionsHeaderSection />
  <main>
    <SectionsAboutSection />
    <SectionsSkillsSection />
    <SectionsCertificationsSection />
    <SectionsExperienceSection />
  </main>
  <SectionsFooterSection />
</template>
