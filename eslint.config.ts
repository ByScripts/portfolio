import config from "@byscripts/eslint-config/vue";
import { defineConfigWithVueTs } from "@vue/eslint-config-typescript";
import prettier from "eslint-config-prettier";

export default defineConfigWithVueTs(config, prettier);
