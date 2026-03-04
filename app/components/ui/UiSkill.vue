<script lang="ts" setup>
const { skill } = defineProps<{
  skill: Skill
}>()

const { localize } = useLocalize()

const iconModules = import.meta.glob<{ default: string }>(
  '@/assets/images/icons/*.svg',
  {
    eager: true,
  },
)

const iconUrl = computed(
  () => iconModules[`/src/assets/images/icons/${skill.icon}.svg`]?.default,
)
</script>

<template>
  <div class="ui-skill">
    <img
      v-if="iconUrl"
      :src="iconUrl"
      :alt="skill.name"
      class="icon"
      width="28"
      height="28"
    >
    <div>
      <h4 class="name">
        {{ skill.name }}
      </h4>
      <p
        v-if="skill.detail"
        class="detail"
      >
        {{ localize(skill.detail) }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.ui-skill {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;

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
}
</style>
