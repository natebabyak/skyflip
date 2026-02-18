<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Github from '$lib/components/icons/github.svelte';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import skyrocket from '$lib/assets/skyrocket.png';
	import routes from '$lib/data/routes.json';
	import * as Command from '$lib/components/ui/command/index.js';
	import { toggleMode } from 'mode-watcher';
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import * as Kbd from '$lib/components/ui/kbd/index.js';

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.metaKey && e.key === 'k') {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<header class="fixed top-0 left-0 z-10 w-full border-b p-4 backdrop-blur-md">
	<div class="flex w-full items-center">
		<NavigationMenu.Root viewport={true}>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child({ props })}
							<a {...props} href="/" class={navigationMenuTriggerStyle()}>
								<img alt="Skyrocket" src={skyrocket} class="size-8 select-none" /></a
							>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				{#each routes as { label, items }}
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="bg-inherit">{label}</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid w-[200px] p-2">
								<li>
									{#each items as { href, title }}
										<NavigationMenu.Link {href}>
											<div class="font-medium">{title}</div>
										</NavigationMenu.Link>
									{/each}
								</li>
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<Button
			onclick={() => (open = true)}
			size="sm"
			variant="outline"
			class="mr-2 ml-auto w-full max-w-3xs"
		>
			Search...
			<Kbd.Group class="ml-auto">
				<Kbd.Root class="border">⌘</Kbd.Root>
				<Kbd.Root class="border">K</Kbd.Root>
			</Kbd.Group>
		</Button>
		<Command.Dialog bind:open>
			<Command.Input placeholder="Search..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				{#each routes as { label, items }}
					<Command.Group heading={label}>
						{#each items as { href, title }}
							<a {href}>
								<Command.Item>{title}</Command.Item>
							</a>
						{/each}
					</Command.Group>
				{/each}
			</Command.List>
		</Command.Dialog>
		<Button
			href="https://github.com/natebabyak/skyrocket"
			size="icon-lg"
			title="GitHub"
			variant="ghost"
		>
			<Github />
		</Button>
		<Button onclick={toggleMode} size="icon-lg" title="Toggle theme" variant="ghost">
			<Sun class="scale-100 rotate-0 transition-transform! dark:scale-0 dark:rotate-90" />
			<Moon class="absolute scale-0 rotate-90 transition-transform! dark:scale-100 dark:rotate-0" />
		</Button>
	</div>
</header>
