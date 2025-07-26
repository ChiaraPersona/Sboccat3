<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const links = [
		{ url: '/eventi', testo: 'Eventi' },
		{ url: '/chi-siamo', testo: 'Chi siamo' },
		{ url: '/gioca', testo: 'Gioca con noi' }
	];

	const socialLinks = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/sboccat3/',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`
		},
		{
			name: 'Spotify',
			url: 'https://open.spotify.com/playlist/6TgXKaQxG0Am08940miWjO?si=76464f8e2aab45bb',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
		},
		{
			name: 'Ko-fi',
			url: 'https://ko-fi.com/sboccat3',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`
		}
	];

	let containerEl: HTMLElement;

	onMount(() => {
		gsap.fromTo(
			containerEl.querySelectorAll('a'),
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power3.out',
				stagger: 0.15
			}
		);
	});
</script>

<nav class="z-50 flex items-center px-4 py-1" bind:this={containerEl}>
	<!-- Home a sinistra -->
	<div>
		<NavbarLink a={{ url: '/', testo: 'Home' }} />
	</div>

	<!-- Link centrati -->
	<div class="flex flex-grow justify-center gap-4">
		{#each links as link}
			<NavbarLink a={link} />
		{/each}
	</div>

	<!-- Social icons a destra -->
	<div class="flex items-center gap-3">
		{#each socialLinks as social}
			<a
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
				class="transition-opacity hover:opacity-80"
			>
				{@html social.svg}
			</a>
		{/each}
	</div>
</nav>
