<script setup lang="ts">
import UiBadge from '@/components/ui/UiBadge.vue'
import UiSection from '@/components/ui/UiSection.vue'
import UiSectionTitle from '@/components/ui/UiSectionTitle.vue'
import { experienceSection } from '@/data/experiences-section'
import type { SupportedLocale } from '@/types/supported-locale'
import { useLocalize } from '@/composables/use-localize'

const { locale } = defineProps<{ locale: SupportedLocale }>()

const localize = useLocalize(() => locale)
</script>

<template>
  <UiSection>
    <UiSectionTitle>{{ localize(experienceSection.sectionTitle) }}</UiSectionTitle>
    <div class="experiences">
      <article
        v-for="experience of experienceSection.experiences"
        :key="`${experience.company}-${experience.period}`"
        class="experience"
        :class="{
          compact: experience.type === 'other',
          freelance: experience.freelance,
        }"
      >
        <div class="header">
          <div>
            <div class="title-row">
              <h3 class="company">{{ experience.company }}</h3>
              <UiBadge v-if="experience.freelance" color="warm" size="small">Freelance</UiBadge>
              <UiBadge v-if="experience.remote" outlined size="small">Full Remote</UiBadge>
            </div>
            <p class="role">{{ localize(experience.role) }}</p>
          </div>
          <span class="period">{{ experience.period }}</span>
        </div>

        <p v-if="experience.location" class="location">{{ experience.location }}</p>
        <p class="description">{{ localize(experience.description) }}</p>

        <div v-if="experience.stack?.length" class="stack">
          <span v-for="tech of experience.stack" :key="tech" class="tag">{{ tech }}</span>
        </div>
      </article>
    </div>
  </UiSection>
</template>

<style scoped>
.experiences {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .experience {
    border-left: 2px solid var(--color-accent);
    padding: 0.75rem 1.5rem;
    border-radius: 0 4px 4px 0;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-accent-soft);
    }

    &.freelance {
      border-left-color: var(--color-accent-warm);
    }

    &.compact {
      border-left-width: 1px;
      border-left-color: var(--color-border);
      padding: 0.5rem 1rem;

      .company {
        font-size: 0.9375rem;
      }

      .role {
        font-size: 0.8125rem;
        color: var(--color-text-light);
      }

      .description {
        font-size: 0.8125rem;
        margin-bottom: 0;
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .company {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text);
  }

  .role {
    font-size: 0.9375rem;
    color: var(--color-accent);
  }

  .period {
    font-size: 0.8125rem;
    color: var(--color-text-light);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .location {
    font-size: 0.8125rem;
    color: var(--color-text-light);
    margin-bottom: 0.375rem;
  }

  .description {
    font-size: 0.9375rem;
    color: var(--color-text-light);
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    background: var(--color-bg-dark);
    color: var(--color-text-on-dark);
    border-radius: 3px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .header {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
}
</style>
