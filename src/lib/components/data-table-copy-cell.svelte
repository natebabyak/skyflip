<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Check from '@lucide/svelte/icons/check';
	import { cn } from '$lib/utils';
	import Copy from '@lucide/svelte/icons/copy';

	let { cellText, copyText }: { cellText: string; copyText: string } = $props();

	let copied = $state(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(copyText);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<Button onclick={copyToClipboard} variant="ghost" class="group w-full justify-start">
	{cellText}
	<div class="relative ml-auto size-4">
		<Copy
			class={cn(
				'absolute scale-100 opacity-0 transition-all group-hover:opacity-100',
				copied && 'scale-0'
			)}
		/>
		<Check class={cn('absolute scale-0 transition-transform', copied && 'scale-100')} />
	</div>
</Button>
