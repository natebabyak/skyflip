<script lang="ts">
	import './layout.css';
	import skyrocket from '$lib/assets/skyrocket.png';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={skyrocket} />
	<title>Skyrocket</title>
	<meta name="description" content="" />
</svelte:head>
<ModeWatcher />
<Tooltip.Provider>
	<Header />
	{@render children()}
	<Footer />
</Tooltip.Provider>
