<script setup lang="ts">
import UiSection from "@/components/ui/UiSection.vue";
import UiSectionTitle from "@/components/ui/UiSectionTitle.vue";
import { skillSection } from "@/data/skill-section";
import type { Skill } from "@/types/skill.ts";
import type { SupportedLocale } from "@/types/supported-locale";
import { useLocalize } from "@/composables/use-localize";

const { locale } = defineProps<{ locale: SupportedLocale }>();

const localize = useLocalize(() => locale);

const iconModules = import.meta.glob<{ default: string }>(
  '../../assets/images/icons/*.svg',
  { eager: true },
)

const getIconUrl = (skill: Skill) =>
  iconModules[`../../assets/images/icons/${skill.icon}.svg`]?.default ?? ''
</script>

<template>
  <UiSection>
    <UiSectionTitle small>{{ localize(skillSection.sectionTitle) }}</UiSectionTitle>
    <div class="skills">
      <div v-for="skill of skillSection.skills" :key="skill.name" class="card">
        <img :src="getIconUrl(skill)" :alt="skill.name" class="icon" width="28" height="28" />
        <div>
          <h4 class="name">{{ skill.name }}</h4>
          <p v-if="skill.detail" class="detail">{{ localize(skill.detail) }}</p>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .card {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
  }

  .name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.3;
  }

  .detail {
    font-size: 0.8125rem;
    color: var(--color-text-light);
    margin-top: 0.125rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}
</style>
