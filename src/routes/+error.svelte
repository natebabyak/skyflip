<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Empty from '$lib/components/ui/empty/index.js';
	import Panda from '@lucide/svelte/icons/panda';
	import Slash from '@lucide/svelte/icons/slash';
	import Github from '$lib/components/icons/github.svelte';
</script>

<main class="flex h-screen w-screen items-center justify-center">
	<Empty.Root>
		<Empty.Header>
			<Empty.Media variant="icon">
				<Panda />
			</Empty.Media>
			<Empty.Title>{page.status}: {page.error?.message}</Empty.Title>
			<Empty.Description>
				The route "{page.url.pathname}" does not exist... not yet at least.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<div class="flex gap-2">
				<Button href="/">
					<Slash />
					Home
				</Button>
				<Button href="https://github.com/natebabyak/skyrocket" target="_blank" variant="outline">
					<Github />
					GitHub
				</Button>
			</div>
		</Empty.Content>
	</Empty.Root>
</main>
