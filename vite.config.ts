import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Removelog from 'vite-plugin-removelog'
import Modules from 'vite-plugin-use-modules'
import VueRouter from 'unplugin-vue-router/vite'
import Compression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [
		Vue(),
		Icons({
			autoInstall: true
		}),
		Unocss(),
		Removelog(),
		VueRouter({
			routesFolder: 'pages',
			dts: 'types/type-router.d.ts'
		}),
		Modules({
			target: 'modules'
		}),
		Compression({
			algorithm: 'brotliCompress'
		}),
		Components({
			dirs: 'components',
			dts: './types/components.d.ts',
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView']
				}
			],
			resolvers: [IconsResolver()]
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
