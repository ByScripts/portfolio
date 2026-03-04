<script lang="ts" setup>
defineProps<{
  small?: boolean;
}>();

defineSlots<{
  default(): unknown;
}>();
</script>

<template>
  <component :is="small ? 'h3' : 'h2'" class="ui-section-title" :class="{ 'is--small': small }">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
.ui-section-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-block: 0 2rem;
  position: relative;

  &.is--small {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  &:not(.is--small)::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-warm);
    border-radius: 1px;
  }
}
</style>
