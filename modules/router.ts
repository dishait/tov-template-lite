import routes from '~pages'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	routes,
	history: createWebHistory()
})

export default (app: App) => app.use(router)
