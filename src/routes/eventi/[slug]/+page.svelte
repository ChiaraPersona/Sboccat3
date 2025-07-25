<script lang="ts">
	export let data;
	const evento = data.evento;
</script>

<div class="mx-auto flex w-fit flex-col gap-8 px-8 pt-8">
	<div class="w-fit">
		<p>
			{new Date(evento.data).toLocaleDateString([], {
				hour: '2-digit',
				minute: '2-digit'
			})}
		</p>
		<h1 class="text-5xl font-bold">{evento.titolo}</h1>

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
				Insieme a Rosi Paparella, coordinatrice del Cad Mo.N.Di, percorreremo la storia del
				movimento lesbico fin dagli anni 90, con le Desiderandae, il primo gruppo separatista
				lesbico pugliese.
			</p>

			<p>“Fondamentale per rafforzare le nostre lotte è custodire la memoria”.</p>

			<p>
				In questo noi crediamo fortemente. Parteciperà all’incontro anche Flavia Tritto, attivista e
				artista pugliese. “Per diventare più capaci di lottare in modo significativo. Senza memoria
				non c’è lotta”. Subito dopo ci sarà un aperitivo di comunità in collaborazione con
				@casaorecchietta.
			</p>
		</div>

		<div class="max-w-96">
			<img src={`/images/evento/${evento.immagine}`} alt={evento.titolo} class="rounded-lg" />
		</div>
	</div>
</div>
