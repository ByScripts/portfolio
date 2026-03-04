<script lang="ts" setup>
export type UiBadgeSize = 'small' | 'medium'
export type UiBadgeColor = 'neutral' | 'warm'

const {
  size = 'medium',
  color = 'neutral',
  outlined,
} = defineProps<{
  size?: UiBadgeSize
  color?: UiBadgeColor
  outlined?: boolean
}>()

defineSlots<{
  default(): unknown
}>()

const variantClasses = useVariants(() => ({ size, color, outlined }))
</script>

<template>
  <span
    class="ui-badge"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>

<style lang="postcss" scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  border-radius: 2px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;

  /* SIZE */
  &.size--small {
    font-size: 0.5625rem;
    padding: 0.0625rem 0.375rem;
  }

  &.size--medium {
    font-size: 0.6875rem;
    padding: 0.125rem 0.5rem;
  }

  /* COLOR */
  &.color--neutral {
    background-color: var(--color-text-light);
    border: 1px solid var(--color-text-light);
  }

  &.color--warm {
    background-color: var(--color-accent-warm);
    border: 1px solid var(--color-accent-warm);
  }

  /* OUTLINED */
  &.is--outlined {
    background-color: transparent;

    &.color--neutral {
      color: var(--color-text-light);
    }

    &.color--warm {
      color: var(--color-accent-warm);
    }
  }
}
</style>
