<script lang="ts">
	import CardEvento from '$lib/card-evento.svelte';
	import { eventi } from '$lib/eventi';
	import { slugify } from '$lib/utils';
</script>

<div class="mx-auto max-w-screen-xl space-y-4 p-4">
	<p class="text-center text-3xl font-bold text-black">I nostri eventi</p>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each eventi as evento}
			<a href={`/eventi/${slugify(evento.titolo)}`} class="block">
				<CardEvento {...evento} />
			</a>
		{/each}
	</div>
</div>
