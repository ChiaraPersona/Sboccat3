<script>
	import Card from '$lib/Card.svelte';

	const eventi = [
		{
			title: 'Chiara Amodio',
			description: 'Un’esposizione collettiva di opere contemporanee.',
			image: 'https://via.placeholder.com/400x250'
		},
		{
			title: 'Carlotta Petrini',
			description: 'Musica elettronica e visual live performance.',
			image: 'https://via.placeholder.com/400x250'
		},
		{
			title: 'Christina Bassi',
			description: 'Laboratorio gratuito per tutti i partecipanti.',
			image: 'https://via.placeholder.com/400x250'
		},
		{
			title: 'Christina Bassi',
			description: 'Laboratorio gratuito per tutti i partecipanti.',
			image: 'https://via.placeholder.com/400x250'
		}
	];
</script>

<div class="cards-container">
	{#each eventi as evento}
		<Card title={evento.title} description={evento.description} image={evento.image} />
	{/each}
</div>

<style>
	.cards-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
		padding: 20px;
	}
</style>
