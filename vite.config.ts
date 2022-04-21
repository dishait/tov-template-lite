import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Modules from 'vite-plugin-use-modules'
import Compression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
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
		Compression({
			algorithm: 'brotliCompress'
		}),
		Components({
			dirs: 'components',
			dts: './types/components.d.ts'
		}),
		AutoImport({
			dts: './types/auto-imports.d.ts',
			imports: [
				'vue',
				'pinia',
				'vue-router',
				'@vueuse/core'
			]
		})
	]
})
