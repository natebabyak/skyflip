<script lang="ts">
	import './layout.css';
	import skyflip from '$lib/assets/skyflip.png';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={skyflip} />
	<title>SkyFlip</title>
	<meta name="description" content="" />
</svelte:head>
<ModeWatcher />
<Tooltip.Provider>
	<Header />
	{@render children()}
	<Footer />
</Tooltip.Provider>
