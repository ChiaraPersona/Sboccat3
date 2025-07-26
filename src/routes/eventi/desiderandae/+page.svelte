<script lang="ts" module>
	import type { Evento } from '$lib/types';
	import copertina from './copertina.png?url';

	export const evento: Evento = {
		titolo: 'Desiderandae',
		data: new Date(2025, 6, 6, 19, 0),
		luogo: 'Collettivo Resine',
		instagram: '',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?',
		immagine: copertina
	};
</script>

<div class="mx-auto flex w-fit flex-col gap-8 px-8 pt-8">
	<div class="w-fit">
		<div>
			<p>
				{evento.data.toLocaleDateString([], {
					hour: '2-digit',
					minute: '2-digit'
				})}
			</p>
			<h1 class="text-5xl font-bold">{evento.titolo}</h1>
		</div>

		{#if evento.sottotitolo}
			<h2 class="mt-2 text-2xl font-medium">{evento.sottotitolo}</h2>
		{/if}
	</div>

	<div class="flex flex-col items-center gap-8 pt-8 sm:flex-row sm:items-start sm:justify-center">
		<div class="prose">
			<p>
				Il 06 giugno dalle 18.00 ci vediamo a @collettivo resine per un incontro davvero speciale.
			</p>

			<p>
				Insieme a Rosi Paparella, coordinatrice del Cad Mo.N.Di e “attivista permanente” come lei
				stessa si definisce, percorreremo la storia del movimento lesbico fin dagli anni 90, avendo
				lei fatto parte delle Desiderandae, il primo gruppo separatista lesbico Pugliese che ancora
				oggi rimane nella storia di tantissime in Italia e Europa.
			</p>
			<p>“Fondamentale per rafforzare le nostre lotte è custodire la memoria”.</p>

			<p>
				In questo noi crediamo fortemente, infatti parteciperà all’incontro anche Flavia Tritto,
				attivista e artista pugliese. “Per diventare più capaci di lottare in modo significativo.
				Senza memoria non c’è lotta” Noi non vediamo l’ora di conoscerle e ascoltarle dal vivo.
				Speriamo anche voi Subito dopo ci sarà un aperitivo di comunità in collaborazione con
				@casaorecchietta
			</p>
		</div>
		<div class="max-w-96">
			<img src={evento.immagine} alt="Foto di copertina" class="rounded-lg" />
		</div>
	</div>
</div>
