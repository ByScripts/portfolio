<script lang="ts" setup>
import AppRoot from "@/components/AppRoot.vue";
import { IK_LOCALE } from "@/utils/injection-keys.ts";
import { provide } from "vue";

provide(IK_LOCALE, "en");
</script>

<template>
  <AppRoot />
</template>
