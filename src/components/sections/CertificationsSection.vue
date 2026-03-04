<script lang="ts" setup>
import UiSection from "@/components/ui/UiSection.vue";
import UiSectionTitle from "@/components/ui/UiSectionTitle.vue";
import { certificationSection } from "@/data/certification-section.ts";
import { useLocalize } from "@/composables/use-localize";

const { localize } = useLocalize();
</script>

<template>
  <UiSection>
    <UiSectionTitle small>
      {{ localize(certificationSection.sectionTitle) }}
    </UiSectionTitle>
    <div class="certifications-row">
      <a
        v-for="certification of certificationSection.certifications"
        :key="certification.name"
        :href="certification.url"
        target="_blank"
        rel="noopener noreferrer"
        class="item"
      >
        <img
          :src="certification.src"
          :alt="certification.name"
          class="image"
          loading="lazy"
          width="877"
          height="620"
        />
      </a>
    </div>
  </UiSection>
</template>

<style lang="postcss" scoped>
.certifications-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .item {
    flex: 0 1 45%;
    text-decoration: none;

    &:hover .image {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .image {
    border-radius: 6px;
    border: 1px solid var(--color-border);
    width: 100%;
    height: auto;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
}
</style>
