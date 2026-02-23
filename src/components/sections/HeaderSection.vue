<script setup lang="ts">
import { profile } from '@/data/profile'
import type { SupportedLocale } from '@/types/supported-locale'
import { useLocalize } from '@/composables/use-localize'
import logo from '@/assets/images/logo/logo-128x128.png'
import UiSection from '@/components/ui/UiSection.vue'
import UiLocaleSwitcher from '@/components/ui/UiLocaleSwitcher.vue'

const { locale } = defineProps<{ locale: SupportedLocale }>()

const localize = useLocalize(() => locale)
</script>

<template>
  <UiSection dark class="header-section">
    <div class="top">
      <img :src="logo" alt="Byscripts" class="logo" width="48" height="48" />
      <UiLocaleSwitcher
        :route="locale === 'en' ? '/' : '/en'"
        :locale="locale === 'en' ? 'fr' : 'en'"
      />
    </div>

    <h1 class="name">{{ profile.name }}</h1>
    <p class="title">{{ localize(profile.title) }}</p>
    <p class="description">{{ localize(profile.description) }}</p>
    <p class="location">{{ profile.location }}</p>

    <div class="links">
      <a
        v-for="social of profile.socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ social.name }}
      </a>
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
    </div>
  </UiSection>
</template>

<style scoped>
.header-section {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
      font-size: 1.75rem;
    }
  }

  .title {
    font-size: 1.125rem;
    color: var(--color-accent-on-dark);
    margin-bottom: 0.25rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .description {
    font-size: 0.9375rem;
    color: var(--color-accent-on-dark);
    opacity: 0.8;
    margin-bottom: 0.375rem;

    @media (max-width: 600px) {
      font-size: 0.875rem;
    }
  }

  .location {
    color: #b0b0b0;
    font-size: 0.9375rem;
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;

    a {
      color: var(--color-accent-on-dark);
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-accent-on-dark-hover);
      }
    }
  }
}
</style>
