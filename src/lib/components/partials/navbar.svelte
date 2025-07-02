<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import MobileMenuLink from './mobile-menu-link.svelte';
	import { onNavigate } from '$app/navigation';
	import { assets } from '$app/paths';
	import { Menu } from '@lucide/svelte/icons';

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

	let isOpen = $state(false);

	onNavigate(() => {
		isOpen = false;
	});
</script>

<nav class="z-50 flex justify-between px-1 py-1">
	<NavbarLink url="/" testo="Home" />
	<div class="hidden gap-1 md:flex">
		{#each links as link}
			<NavbarLink url={link.url} testo={link.testo} />
		{/each}
	</div>

	<Sheet.Root bind:open={isOpen}>
		<Sheet.Trigger class="bg-sb-bianco/15 hover:bg-sb-bianco/40 block rounded-md p-2 md:hidden">
			<Menu />
		</Sheet.Trigger>

		<Sheet.Content class="bg-sb-rosa w-screen !gap-0 border-none md:hidden">
			<Sheet.Header>
				<Sheet.Title class="flex items-center justify-center md:hidden">
					<img class="h-12" src="/images/logo-sboccat3.png" alt="logo" />
				</Sheet.Title>
			</Sheet.Header>

			<div class="space-y-2 p-4">
				{#each links as link}
					<MobileMenuLink url={link.url} testo={link.testo} />
				{/each}
			</div>
		</Sheet.Content>
	</Sheet.Root>
</nav>
