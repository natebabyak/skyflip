<script lang="ts">
	import bazaarAlley from '$lib/assets/bazaar_alley.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import communityCenter from '$lib/assets/community_center.png';
	import locations from '$lib/assets/locations.png';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<svelte:head>
	<title>Home - Skyrocket</title>
</svelte:head>

<main class="mt-18.25">
	<article class="mx-auto flex flex-col border-x md:max-w-2xl">
		<h1 class="pl-4 text-6xl leading-tight">
			From The End.
			<br />
			To The Endgame.
		</h1>
		<p class="mt-4 px-4 text-lg text-balance text-muted-foreground">
			Skyrocket has all the tools you need to help you make informed financial decisions in Hypixel
			SkyBlock.
		</p>
		<Separator class="mt-4" />
		<div class="grid grid-cols-2">
			<div>
				<h3 class="text-xl font-medium">Bazaar Flips</h3>
				<p>aaa</p>
			</div>
			<img alt="Bazaar Alley" src={bazaarAlley} />
		</div>
		<img alt="Community Center" src={communityCenter} />
		<Separator />
	</article>
</main>
