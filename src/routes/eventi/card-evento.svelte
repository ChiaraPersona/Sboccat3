<script lang="ts">
	import { assets } from '$app/paths';
	import type { Evento } from './eventi';

	let p: Evento = $props();
</script>

<div
	class={[
		'text-sb-bianco shadow-lg',
		'from-sb-rosa/50 to-sb-viola/80 bg-radial-[at_10%_10%]',
		'flex flex-col items-center',
		'gap-3 rounded-lg  p-4 text-center',
		'transition-all duration-200 hover:scale-103 hover:rotate-2'
	]}
>
	<img
		class="size-40 rounded-full"
		src="{assets}/images/evento/{p.immagine}"
		alt="Foto di {p.titolo}"
	/>
	<div>
		<p class="text-xl font-bold">{p.titolo}</p>
		<p class="italic">“{p.sottotitolo}“</p>
	</div>
	<p>{p.data}</p>
</div>
