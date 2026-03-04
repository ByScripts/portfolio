<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const { locale } = defineProps<{
  route: RouteLocationRaw
  locale: SupportedLocale
}>()

const ariaLabel = computed(() => `Switch to ${locale}`)
</script>

<template>
  <RouterLink
    :to="route"
    class="ui-locale-switcher"
    :aria-label
  >
    {{ locale.toUpperCase() }}
  </RouterLink>
</template>

<style lang="postcss" scoped>
.ui-locale-switcher {
  background: transparent;
  border: 1px solid currentColor;
  color: inherit;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.625rem;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: inherit;
  }
}
</style>
