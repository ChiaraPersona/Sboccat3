<script lang="ts">
	import { assets } from '$app/paths';
	import type { Persona } from './persone';

	let p: Persona = $props();
</script>

<div class="border-sb-viola flex flex-col items-center gap-3 rounded-lg border-8 p-4 text-center">
	<img
		class="border-sb-viola size-40 rounded-full border-8"
		src="{assets}/images/persone/{p.immagine}"
		alt="Foto di {p.nome}"
	/>
	<div>
		<p>{p.nome}</p>
		<p>{p.citazione}</p>
	</div>
	<p>{p.ruolo}</p>
</div>
