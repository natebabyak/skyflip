<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
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
	<main class="pt-18.25">
		{@render children()}
	</main>
	<Footer />
</Tooltip.Provider>
