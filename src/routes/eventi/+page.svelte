<script lang="ts">
	import CardEvento from './card-evento.svelte';
	import { eventi } from './eventi';
</script>

<div class="mx-auto max-w-screen-xl space-y-4 p-4">
	<p class="text-center text-3xl font-bold text-black">I nostri eventi</p>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each eventi as evento}
			<CardEvento {...evento} />
		{/each}
	</div>
</div>
