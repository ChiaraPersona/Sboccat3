<script lang="ts">
	import CardPersona from './card-persona.svelte';
	import { persone } from './persone';
</script>

<div class="mx-auto max-w-screen-xl space-y-4 p-4">
	<p class="text-sb-arancione text-center text-5xl font-bold">Scopri il team</p>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each persone as persona}
			<CardPersona {...persona} />
		{/each}
	</div>
</div>
