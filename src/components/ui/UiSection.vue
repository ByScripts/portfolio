<script lang="ts" setup>
defineProps<{
  dark?: boolean;
}>();

defineSlots<{
  default(): unknown;
}>();
</script>

<template>
  <section class="ui-section" :class="{ 'is--dark': dark }">
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.ui-section {
  padding-block: 4rem;
  padding-inline: 2rem;

  .content {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  &.is--dark {
    background: var(--color-bg-dark);
    color: var(--color-text-on-dark);
  }

  &:not(.is--dark) + &:not(.is--dark) {
    padding-block-start: 0;
  }
}
</style>
