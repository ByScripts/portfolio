import { ViteSSG as viteSSG } from "vite-ssg";
import { routes } from "vue-router/auto-routes";

import "./assets/styles/global.css";
import App from "./App.vue";

export const createApp = viteSSG(App, { routes });
