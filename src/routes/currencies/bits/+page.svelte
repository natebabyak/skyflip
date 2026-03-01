<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	const { data } = $props();
</script>

<svelte:head>
	<title>Bits - Skyrocket</title>
</svelte:head>

<main class="mt-18.25 p-4">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Item</Table.Head>
					<Table.Head class="text-right">Bits Cost</Table.Head>
					<Table.Head class="text-right">Price</Table.Head>
					<Table.Head class="text-right">Coins/Bit</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.rows as { icon, name, copyText, bitsCost, price, coinsPerBit }}
					<Table.Row>
						<Table.Cell>
							<CopyButton {icon} {name} {copyText} />
						</Table.Cell>
						<Table.Cell class="text-right">{bitsCost.toLocaleString('en-US')}</Table.Cell>
						<Table.Cell class="text-right">
							{price.toLocaleString('en-US', {
								style: 'decimal',
								minimumFractionDigits: 1,
								maximumFractionDigits: 1
							})}
						</Table.Cell>
						<Table.Cell class="text-right">
							{coinsPerBit.toLocaleString('en-US', {
								style: 'decimal',
								minimumFractionDigits: 1,
								maximumFractionDigits: 1
							})}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</main>
