<script lang="ts" setup>
import UiSection from "@/components/ui/UiSection.vue";
import UiSectionTitle from "@/components/ui/UiSectionTitle.vue";
import { aboutSection } from "@/data/about-section";
import { useLocalize } from "@/composables/use-localize";

const { localize } = useLocalize();
</script>

<template>
  <UiSection>
    <UiSectionTitle>{{ localize(aboutSection.sectionTitle) }}</UiSectionTitle>
    <p v-for="line of localize(aboutSection.content)" :key="line" class="line">
      {{ line }}
    </p>
  </UiSection>
</template>

<style lang="postcss" scoped>
.line {
  color: var(--color-text-light);
  margin-bottom: 1rem;
}
</style>
