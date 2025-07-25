<script lang="ts" module>
	import type { Evento } from '$lib/types';

	export const dati: Evento = {
		titolo: 'GAYMING',
		data: new Date(2025, 5, 30, 19, 30),
		luogo: 'Libreria Ikigai, Conversano',
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

	<p>
		Questo è uno di quegli eventi che avevamo in cantina da un po’ e che non vedevamo l’ora di
		condividere con voi.
	</p>
	<p>Finalmente possiamo.</p>
	<p>Il 30 maggio presso Libreria Ikigai a Conversano</p>
	<p>
		Parleremo di giochi e tratteremo insieme a Davide Capobianco, Maria Cristina Tanzi e Robin
		Zingarelli come l’essere queer e la transgenderità venga trattata nel videogioco e nel gioco di
		ruolo. Un modo per esplorare la propria identità anche attraverso il gioco, in uno spazio
		virtuale e comunitario che per moltə è uno spazio reale che restituisce tanta legittimazione e
		occasioni di confronto.
	</p>
	<p>
		Subito dopo finalmente daremo vita ai nostri amati tavoli di gioco dove esploreremo quante più
		ambientazioni possibili, con a disposizione divers3 master che ci accompagneranno nelle nostre
		avventure. Non preoccuparti se non lo hai mai fatto prima: tuttə saranno benvenutə!
	</p>
</div>
