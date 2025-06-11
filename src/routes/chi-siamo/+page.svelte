<script lang="ts">
	import CardPersona from './card-persona.svelte';
	import { persone } from './persone';
</script>

<p>Chi siamo?</p>

<div class="grid grid-cols-3 gap-4 p-4">
	{#each persone as persona}
		<CardPersona {...persona} />
	{/each}
</div>
