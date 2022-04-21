import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Modules from 'vite-plugin-use-modules'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [
		Vue(),
		Unocss(),
		Pages({
			dirs: 'pages'
		}),
		Modules({
			target: 'modules'
		}),
		Components({
			dirs: 'components',
			dts: './types/components.d.ts'
		})
	]
})
