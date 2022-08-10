import type { App } from 'vue'
import {
	createRouter,
	createWebHistory
} from 'vue-router/auto'

export const router = createRouter({
	history: createWebHistory()
})

export default (app: App) => app.use(router)
