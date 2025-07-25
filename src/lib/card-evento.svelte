<script lang="ts">
	import { assets } from '$app/paths';
	export let immagine: string;
	export let titolo: string;
	export let sottotitolo: string;
	export let data: string;
</script>

<div
	class={[
		'text-sb-bianco shadow-lg',
		'from-sb-rosa/50 to-sb-viola/80 bg-radial-[at_10%_10%]',
		'flex flex-col items-center',
		'gap-3 rounded-lg p-4 text-center',
		'transition-all duration-200 hover:scale-103 hover:rotate-2'
	]}
>
	<img class="size-40 rounded-full" src={`/images/evento/${immagine}`} alt={`Foto di ${titolo}`} />
	<div>
		<p class="text-xl font-bold">{titolo}</p>
		<p class="italic">“{sottotitolo}“</p>
	</div>
	<p>{new Date(data).toLocaleDateString()}</p>
</div>
