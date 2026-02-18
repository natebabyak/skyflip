<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Skyrocket</title>
	<meta name="description" content="WIP" />
</svelte:head>
<ModeWatcher />
<Tooltip.Provider>
	<Header />
	<main class="mx-auto w-full pt-[68px] md:w-2xl lg:w-4xl">
		{@render children()}
	</main>
	<Footer />
</Tooltip.Provider>
