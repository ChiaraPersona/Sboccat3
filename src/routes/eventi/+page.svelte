<script lang="ts">
	import { eventi } from '$lib/eventi';
	import CardEvento from '$lib/card-evento.svelte';

	const slugify = (str: string) =>
		str
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]/g, '');
</script>

<div class="mx-auto max-w-screen-xl p-4">
	<h1 class="mb-6 text-center text-3xl font-bold">I nostri eventi</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each eventi as evento}
			<a href={`/eventi/${slugify(evento.titolo)}`} class="block">
				<CardEvento {...evento} />
			</a>
		{/each}
	</div>
</div>
