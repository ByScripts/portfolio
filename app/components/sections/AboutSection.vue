<script lang="ts" setup>
const { localize } = useLocalize()
</script>

<template>
  <UiSection>
    <UiSectionTitle>{{ localize(aboutSection.sectionTitle) }}</UiSectionTitle>
    <p
      v-for="line of localize(aboutSection.content)"
      :key="line"
      class="line"
    >
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
