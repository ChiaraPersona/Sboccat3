<script lang="ts">
	import CardPersona from './card-persona.svelte';
	import { persone } from './persone';
</script>

<div class="mx-auto max-w-screen-xl p-8">
	<h2 class="mb-8 text-center text-4xl font-bold">Scopri il team</h2>

	<div class="flex flex-wrap justify-center gap-8">
		{#each persone as p}
			<CardPersona {...p} />
		{/each}
	</div>
</div>
