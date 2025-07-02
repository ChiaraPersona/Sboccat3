<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import MobileMenuLink from './mobile-menu-link.svelte';

	type Link = {
		url: string;
		testo: string;
	};

	const links: Link[] = [
		{ url: '/eventi', testo: 'Eventi' },
		{ url: '/chi-siamo', testo: 'Chi siamo' },
		{ url: '/donazioni', testo: 'Donazioni' },
		{ url: '/gioca', testo: 'Gioca con noi' }
	];
</script>

<nav class="bg-sb-viola text-sb-bianco flex justify-between px-1 py-1">
	<NavbarLink url="/" testo="Home" />
	<div class="hidden gap-1 md:flex">
		{#each links as link}
			<NavbarLink url={link.url} testo={link.testo} />
		{/each}
	</div>

	<Sheet.Root>
		<Sheet.Trigger class="block md:hidden">
			<img class="h-5" src="/images/hamburger-icon.png" alt="hamburger icon bianco" />
		</Sheet.Trigger>
		<Sheet.Content class="w-screen md:hidden">
			<Sheet.Header>
				<Sheet.Title>SBOCCAT3</Sheet.Title>
			</Sheet.Header>

			{#each links as link}
				<MobileMenuLink url={link.url} testo={link.testo} />
			{/each}
		</Sheet.Content>
	</Sheet.Root>
</nav>
