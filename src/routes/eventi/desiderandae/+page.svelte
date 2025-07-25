<script lang="ts" module>
	import type { Evento } from '$lib/types';
	import copertina from './copertina.png?url';

	export const dati: Evento = {
		titolo: 'Desiderandae',
		data: new Date(2025, 6, 6, 19, 0),
		luogo: 'Collettivo Resine',
		instagram: '',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?',
		immagine: copertina
	};
</script>

<img src={dati.immagine} alt="Foto di copertina" class="w-full" />
<div class="prose mx-auto">
	<p>{dati.data.toLocaleDateString()}</p>

	<h1>{dati.titolo}</h1>

	{#if dati.sottotitolo}
		<h2>{dati.sottotitolo}</h2>
	{/if}

	<p>Il 06 giugno dalle 18.00 ci vediamo a @collettivo resine per un incontro davvero speciale.</p>

	<p>
		Insieme a Rosi Paparella, coordinatrice del Cad Mo.N.Di e “attivista permanente” come lei stessa
		si definisce, percorreremo la storia del movimento lesbico fin dagli anni 90, avendo lei fatto
		parte delle Desiderandae, il primo gruppo separatista lesbico Pugliese che ancora oggi rimane
		nella storia di tantissime in Italia e Europa.
	</p>
	<p>“Fondamentale per rafforzare le nostre lotte è custodire la memoria”.</p>

	<p>
		In questo noi crediamo fortemente, infatti parteciperà all’incontro anche Flavia Tritto,
		attivista e artista pugliese. “Per diventare più capaci di lottare in modo significativo. Senza
		memoria non c’è lotta” Noi non vediamo l’ora di conoscerle e ascoltarle dal vivo. Speriamo anche
		voi Subito dopo ci sarà un aperitivo di comunità in collaborazione con @casaorecchietta
	</p>
</div>
