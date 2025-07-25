<script lang="ts">
	const evento = {
		titolo: 'Desiderandae',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?',
		data: '2025-07-06T19:00:00',
		immagine: 'desiderandae.png',
		luogo: 'Collettivo Resine',
		instagram: ''
	};
</script>

<div class="mx-auto max-w-screen-md p-8">
	<p>{new Date(evento.data).toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })}</p>
	<h1 class="mt-2 text-4xl font-bold">{evento.titolo}</h1>
	<p class="text-xl italic">{evento.sottotitolo}</p>

	<div class="mt-6 flex flex-col gap-8 sm:flex-row">
		<div class="prose">
			<p>
				Il 06 luglio dalle 19.00 ci vediamo a {evento.luogo} per un incontro davvero speciale.
			</p>
			<p>
				Con Rosi Paparella e Flavia Tritto esploreremo la memoria del movimento lesbico pugliese.
			</p>
			<p>A seguire aperitivo di comunità in collaborazione con @casaorecchietta.</p>
		</div>

		<img src={`/images/evento/${evento.immagine}`} alt={evento.titolo} class="w-80 rounded-lg" />
	</div>
</div>
