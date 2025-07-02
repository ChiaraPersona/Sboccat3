<script lang="ts" module>
	import type { Evento } from '$lib/types';

	export const dati: Evento = {
		titolo: 'Hyperpop',
		data: new Date('2025-06-12'),
		ora: '19:00',
		luogo: 'Collettivo Resine',
		instagram: '',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?'
	};
</script>

<div class="prose mx-auto">
	<p>{dati.data.toLocaleDateString()}</p>

	<h1>{dati.titolo}</h1>

	{#if dati.sottotitolo}
		<h2>{dati.sottotitolo}</h2>
	{/if}

	<p>No, sul serio, ti hanno mai detto "wow, davvero ti piace questo schifo?" 🙄</p>

	<p>
		Capita spesso quando la musica in questione esce dai confini dell'eteronormatività per coltivare
		nuovi suoni, nuove sensibilità, nuove realtà, nuove utopie.✨
	</p>

	<p>Questo è quello che, almeno in alcuni casi, ha fatto l'Hyperpop💥</p>

	<p>📌Giovedì 12 dalle 19.00 ci vediamo da @collettivo.resine per parlarne insieme.</p>

	<p>
		📣La partecipazione è consigliata ad un pubblico di sol3 visionari3, l'organizzazione si
		deresponsabilizza da infodump non necessari, improvvisi colpi di sonno, fastidi generalizzati,
		paroloni accademici, irritazione genitale, episodi di ballo sfrenato.🤭
	</p>

	<p>
		👉🏻A tenere la presentazione sarà la nostra Maria Cristina Tanzi, musicista, compositrice e
		dottoranda presso La Sapienza.
	</p>

	<p>
		🎶A seguire ci sarà l’esibizione del coro @doremixed che siamo onorat3 e molto felici di avere
		con noi, la cui esibizione è volta a raccogliere fondi per il Bari Pride (@baripride) 🫶🏻
	</p>
</div>
