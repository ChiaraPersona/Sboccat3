<script lang="ts">
	import { assets } from '$app/paths';
	import type { Persona } from './persone';

	let p: Persona = $props();
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
		src="{assets}/images/persone/{p.immagine}"
		alt="Foto di {p.nome}"
	/>
	<div>
		<p class="text-xl font-bold">{p.nome}</p>
		<p class="italic">“{p.citazione}“</p>
	</div>
	<p>{p.ruolo}</p>
</div>
