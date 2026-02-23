import App from './App.vue'
import './assets/styles/global.css'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

export const createApp = ViteSSG(App, { routes })
