<script lang="ts">
	import { assets } from '$app/paths';
	import type { Persona } from './persone';

	export let immagine: string;
	export let nome: string;
	export let citazione: string;
	export let ruolo: string;
</script>

<div class="flip-card">
	<div class="flip-inner">
		<!-- Front -->
		<div class="flip-front">
			<img src="{assets}/images/persone/{immagine}" alt="Foto di {nome}" />
		</div>

		<!-- Back -->
		<div class="flip-back">
			<h3 class="mb-2 text-2xl font-bold">{nome}</h3>
			<p class="mb-4 italic">“{citazione}“</p>
			<span class="text-sm tracking-widest uppercase">{ruolo}</span>
		</div>
	</div>
</div>

<style>
	.flip-card {
		perspective: 1500px;
		width: 300px;
		height: 400px;
	}
	.flip-inner {
		width: 100%;
		height: 100%;
		position: relative;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-style: preserve-3d;
	}
	.flip-card:hover .flip-inner {
		transform: rotateY(180deg) scale(1.03);
	}
	.flip-front,
	.flip-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
	}
	.flip-front {
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flip-front img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.flip-back {
		background: linear-gradient(to bottom right, #f472b6, #9333ea);
		transform: rotateY(180deg);
		color: white;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
