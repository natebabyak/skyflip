<script lang="ts">
	import { columns } from './columns.js';
	import DataTable from './data-table.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Bazaar Flips - SkyFlip</title>
</svelte:head>

<main class="mt-18.25">
	<DataTable data={data.rows} {columns} />
</main>
