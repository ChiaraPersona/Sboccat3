<script lang="ts">
	export let titolo: string;
	export let sottotitolo: string;
	export let data: string;
	export let immagine: string;
</script>

<div class="rounded-lg bg-white p-4 text-center shadow-lg transition-transform hover:scale-105">
	<img class="mx-auto h-32 w-32 rounded-full" src={`/images/evento/${immagine}`} alt={titolo} />
	<h2 class="mt-2 text-xl font-bold">{titolo}</h2>
	<p class="italic">“{sottotitolo}”</p>
	<p class="mt-1 text-sm text-gray-500">{new Date(data).toLocaleDateString()}</p>
</div>
