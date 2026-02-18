<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Copy from '@lucide/svelte/icons/copy';

	let { cellText, copyText }: { cellText: string; copyText: string } = $props();
</script>

<Button
	onclick={() => {
		navigator.clipboard.writeText(copyText);
	}}
	variant="ghost"
	class="group"
>
	{cellText}
	<Copy class="opacity-0 transition-opacity group-hover:opacity-100" />
</Button>
