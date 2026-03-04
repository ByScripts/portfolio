<script lang="ts" setup>
import UiSection from "@/components/ui/UiSection.vue";
import UiSectionTitle from "@/components/ui/UiSectionTitle.vue";
import { skillSection } from "@/data/skill-section";
import { useLocalize } from "@/composables/use-localize";
import UiSkill from "@/components/ui/UiSkill.vue";

const { localize } = useLocalize();
</script>

<template>
  <UiSection>
    <UiSectionTitle small>
      {{ localize(skillSection.sectionTitle) }}
    </UiSectionTitle>
    <div class="skills">
      <UiSkill v-for="skill of skillSection.skills" :key="skill.name" :skill />
    </div>
  </UiSection>
</template>

<style lang="postcss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}
</style>
