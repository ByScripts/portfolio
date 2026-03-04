<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <UiSection
    dark
    class="footer-section"
  >
    <div class="inner">
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

      <p class="copy">
        &copy; {{ year }} {{ profile.name }}.
      </p>
    </div>
  </UiSection>
</template>

<style lang="postcss" scoped>
.footer-section {
  .links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.25rem;

    a {
      color: var(--color-accent-on-dark);
      font-size: 0.875rem;

      &:hover {
        color: var(--color-accent-on-dark-hover);
      }
    }
  }

  .copy {
    text-align: center;
    font-size: 0.8125rem;
    color: #b0b0b0;
  }
}
</style>
