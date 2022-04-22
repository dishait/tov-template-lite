<script lang="ts" setup>
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const msg = computed(() =>
	isDark.value ? 'dark' : 'light'
)
</script>

<template>
	<div
		@click="toggleDark()"
		class="cursor-pointer inline-block"
	>
		<div class="icon-btn" i-carbon-sun dark:i-carbon-moon />
	</div>
</template>
